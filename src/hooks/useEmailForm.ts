'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ChangeEvent } from 'react'
import { insertMaskInPhone } from '../utils'

const userSchema = z.object({
    name: z.string().min(4, "O nome é obrigatório."),
    email: z.string().email("Digite um email válido."),
    phone: z.string().min(1, "O telefone é obrigatório.").refine((value) => /^[\d()\-\s]{14,15}$/.test(value), {
        message: "Número de telefone inválido"
    }),
    subject: z.string().min(5, "O assunto precisa ter mais de 5 caracteres."),
    message: z.string().min(1, "A mensagem é obrigatória.").max(250, "A mensagem deve ter no máximo 250 caracteres."),
})

export type FormData = z.infer<typeof userSchema>

export function useEmailForm(defaultValues?: Partial<FormData>) {
    const methods = useForm<FormData>({
        resolver: zodResolver(userSchema),
        mode: 'onChange',
        defaultValues,
    })

    function handleMask(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const formattedPhone = insertMaskInPhone(e.target.value)
        methods.setValue("phone", formattedPhone)
        methods.clearErrors("phone")
    }

    return {
        ...methods,
        handleMask,
    }
}
