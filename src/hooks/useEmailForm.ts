'use client'

import { useForm, DefaultValues } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ChangeEvent } from 'react'
import { insertMaskInPhone } from '../utils'

const emailSchema = z.object({
    name: z.string().min(4, "O nome é obrigatório."),
    email: z.string().email("Digite um email válido."),
    phone: z.string().min(1, "O telefone é obrigatório.").refine((value) => /^[\d()\-\s]{14,15}$/.test(value), {
        message: "Número de telefone inválido"
    }),

})

const fullSchema = emailSchema.extend({
    subject: z.string().min(5, "O assunto precisa ter mais de 5 caracteres."),
    message: z.string().min(1, "A mensagem é obrigatória.").max(250, "A mensagem deve ter no máximo 250 caracteres."),
});

export type PartialFormData = z.infer<typeof emailSchema>
export type FullFormData = z.infer<typeof fullSchema>

type FormSchema = typeof emailSchema | typeof fullSchema;
type FormValues = PartialFormData | FullFormData;

export function useEmailForm(schema: FormSchema, defaultValues?: DefaultValues<FormValues>) {
    const methods = useForm<FormValues>({
        resolver: zodResolver(schema),
        mode: 'onChange',
        defaultValues: defaultValues as DefaultValues<FormValues>
    })

    function handleMask(e: ChangeEvent<HTMLInputElement>): void {
        const formattedPhone = insertMaskInPhone(e.target.value)

        methods.setValue('phone', formattedPhone)
        methods.clearErrors('phone')
    }

    return {
        ...methods,
        handleMask,
    }
}


export {
    emailSchema,
    fullSchema
}