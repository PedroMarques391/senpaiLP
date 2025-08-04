import React, { ReactNode, useState } from 'react'
import { useFormContext } from "react-hook-form"
import { z } from "zod"
import { Button } from './button'

import ModalMessage from '../sections/ModalMessage'
import { IModalMessage } from '@/src/types'
import { DialogFooter } from './dialog'




export const userSchema = z.object({
    name: z.string().min(4, "O nome é obrigatório."),
    email: z.string().email("Digíte um email válido."),
    phone: z.string().min(1, "O telefone é obrigatório.").refine((value) => /^[\d\(\)\-\s]{14,15}$/.test(value), {
        message: "Numero de telefone invalido"
    }),
    subject: z.string().min(5, "O assunto precisa ter mais de 5 caracteres."),
    message: z.string().min(1, "A mensagem é obrigatória.").max(250, "A mensagem deve ter no máximo 250 caracteres."),
})

export type FormData = z.infer<typeof userSchema>

const FormDialog = ({ children }: { children: ReactNode }): React.JSX.Element => {
    const [loading, setLoaging] = useState<boolean>(false);
    const [emailSend, setEmailSend] = useState<boolean>(false);
    const [modalMessageItens, setModalMessageItens] = useState({} as IModalMessage)

    const { handleSubmit, reset } = useFormContext<FormData>()

    async function userSubmit(data: FormData) {
        setLoaging(true)
        await fetch("/api/emails/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Erro na requisição")
                }
                setEmailSend((prev) => !prev)
                setModalMessageItens({
                    statusIcon: "check",
                    text: "Obrigado por entrar em contato. Sua mensagem chegou direitinho e logo logo responderemos com todo carinho! 💌",
                    textButton: "Nova Mensagem",
                    setEmailSend: setEmailSend
                })
            })
            .catch(() => {
                setEmailSend((prev) => !prev)
                setModalMessageItens({
                    statusIcon: "x",
                    text: "Ops! Algo deu errado ao enviar sua mensagem. Por favor, tente novamente",
                    textButton: "Tentar Novamente",
                    setEmailSend: setEmailSend
                })
            })
            .finally(() => setLoaging((prev) => !prev))
        reset()
    }


    return (
        <>
            {emailSend ? (
                <ModalMessage
                    statusIcon={modalMessageItens.statusIcon}
                    text={modalMessageItens.text}
                    textButton={modalMessageItens.textButton}
                    setEmailSend={modalMessageItens.setEmailSend}
                />

            ) : (
                <form onSubmit={handleSubmit(userSubmit)} className="space-y-3">
                    {children}
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
                                <span>Enviar</span>
                            )}
                        </Button>
                    </DialogFooter>
                </form >
            )}
        </>
    )
}


export default FormDialog