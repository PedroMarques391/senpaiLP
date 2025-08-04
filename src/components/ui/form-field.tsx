import { Input } from './input'
import { Textarea } from './textarea'
import { Label } from './label'
import React from 'react'

interface FormFieldProps {
    label: string
    name: string
    error?: string
    className?: string
    type?: 'text' | 'email' | 'textarea'
    register: any
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
    maxLength?: number
}

export const FormField = ({
    label,
    name,
    error,
    className = '',
    type = 'text',
    register,
    onChange,
    maxLength
}: FormFieldProps) => {
    const InputComponent = type === 'textarea' ? Textarea : Input

    return (
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor={name} className="text-right">{label}</Label>
            <InputComponent
                id={name}
                type={type !== 'textarea' ? type : undefined}
                maxLength={maxLength}
                className={`col-span-3 ${className}`}
                {...register(name)}
                onChange={onChange}
            />
            {error && <p className="text-red-500 col-span-4 text-sm">{error}</p>}
        </div>
    )
}
