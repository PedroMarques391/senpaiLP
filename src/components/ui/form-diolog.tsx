import React, { useState } from 'react'
import { Textarea } from './textarea'
import { Input } from './input'
import { Label } from './label'
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { DialogFooter, DialogClose } from './dialog'
import { Button } from './button'
import { insertMaskInPhone } from '@/src/utils'
import { CircleCheckBig } from 'lucide-react'




const userSchema = z.object({
    name: z.string().min(4, "O nome é obrigatório."),
    email: z.string().email("Digíte um email válido."),
    phone: z.string().min(1, "O telefone é obrigatório.").refine((value) => /^[\d\(\)\-\s]{14,15}$/.test(value), {
        message: "Numero de telefone invalido"
    }),
    subject: z.string().min(5, "O assunto precisa ter mais de 5 caracteres."),
    message: z.string().min(1, "A mensagem é obrigatória.").max(250, "A mensagem deve ter no máximo 250 caracteres."),
})

type FormData = z.infer<typeof userSchema>

const FormDialog = (): React.JSX.Element => {
    const [loading, setLoaging] = useState<boolean>(false);
    const [emailSend, setEmailSend] = useState<boolean>(false);

    const { register, handleSubmit, formState: { errors }, setValue, clearErrors, reset } = useForm({
        resolver: zodResolver(userSchema),
    })

    async function userSubmit(data: FormData) {
        setLoaging(true)
        await fetch("/api/emails/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(() => setEmailSend((prev) => !prev))
            .catch(() => console.log("deu o carai"))
            .finally(() => setLoaging((prev) => !prev))
        reset()
    }

    function handleMask(e: React.ChangeEvent<HTMLInputElement>): void {
        const formattedPhone: string = insertMaskInPhone(e.target.value)
        setValue("phone", formattedPhone)
        clearErrors("phone")
    }

    return (
        <>
            {emailSend ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                    <CircleCheckBig size={160} color='#00ff33' />
                    <p className="text-sm text-zinc-500 max-w-xs py-2">
                        Obrigado por entrar em contato. Sua mensagem chegou direitinho e logo logo responderemos com todo carinho! 💌
                    </p>
                    <div className="w-full mt-4 flex justify-end items-center gap-2">
                        <Button onClick={() => setEmailSend((prev) => !prev)} variant="default">
                            Nova mensagem
                        </Button>
                        <DialogClose asChild>
                            <Button variant="destructive">Sair</Button>
                        </DialogClose>
                    </div>
                </div>

            ) : (
                <form onSubmit={handleSubmit(userSubmit)} className="space-y-3">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">Nome</Label >
                        <Input className="col-span-3" {...register("name")} />
                        {errors.name && <p className="text-red-500 col-span-4 text-sm">{errors.name.message}</p>}
                    </div >

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">E-mail</Label>
                        <Input type='email' className="col-span-3" {...register("email")} />
                        {errors.email && <p className="text-red-500 col-span-4 text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phone" className="text-right">Telefone</Label>
                        <Input type="text"
                            className="col-span-3"
                            {...register("phone")}
                            maxLength={15}
                            onChange={handleMask} />
                        {errors.phone && <p className="text-red-500 col-span-4 text-sm">{errors.phone.message}</p>}
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="subject" className="text-right">Assunto</Label>
                        <Input
                            className="col-span-3" {...register("subject")} />
                        {errors.subject && <p className="text-red-500 col-span-4 text-sm">{errors.subject.message}</p>}
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="message" className="text-right">Mensagem</Label>
                        <Textarea
                            className="col-span-3 resize-none" {...register("message")} />
                        {errors.message && <p className="text-red-500 col-span-4 text-sm">{errors.message.message}</p>}
                    </div>

                    <DialogFooter>

                        <Button
                            type="submit"
                            disabled={loading}
                            className={`w-full flex items-center justify-center gap-2 transition-all duration-300 ${loading ? 'bg-gray-400 text-black cursor-not-allowed' : 'bg-black hover:bg-black/80 text-white'
                                } rounded-2xl py-3 text-base font-semibold `}
                        >
                            {loading ? (
                                <>
                                    <span
                                        className="inline-block h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                    <span>Enviando...</span>
                                </>
                            ) : (
                                <span>Enviar 💌</span>
                            )}
                        </Button>
                    </DialogFooter>
                </form >
            )}
        </>
    )
}


export default FormDialog