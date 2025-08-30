import { Input } from "./input";
import { Textarea } from "./textarea";
import { Label } from "./label";
import React, { ChangeEvent } from "react";
import { useFormContext } from "react-hook-form";
import { insertMaskInPhone } from "@/src/utils";

interface FormFieldProps {
    label: string
    name: string
    className?: string
    type?: "text" | "email" | "textarea"
    maxLength?: number
    direction?: "row" | "col"
}

export const FormField = ({
    label,
    name,
    className = "",
    type = "text",
    maxLength,
    direction = "row"
}: FormFieldProps) => {
    const { register, formState: { errors }, setValue, clearErrors } = useFormContext();
    const error = errors[name]?.message as string;
    const InputComponent = type === "textarea" ? Textarea : Input;

    function handleMask(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
        const formattedPhone = insertMaskInPhone(e.target.value);
        setValue("phone", formattedPhone);
        clearErrors("phone");
    }

    return (
        <div
            className={
                direction === "row"
                    ? "grid grid-cols-4 items-center gap-2"
                    : "flex flex-col gap-1"
            }
        >
            <Label
                htmlFor={name}
                className={direction === "row" ? "text-right" : "text-left"}
            >
                {label}
            </Label>
            <InputComponent
                id={name}
                type={type !== "textarea" ? type : undefined}
                maxLength={maxLength}
                className={
                    direction === "row"
                        ? `col-span-3 ${className}`
                        : `${className}`
                }
                {...register(name)}
                onChange={(e) => {
                    if (name === "phone") {
                        handleMask(e);
                        register(name).onChange(e);
                    } else {
                        register(name).onChange(e);
                    }
                }}
            />
            {error && (
                <p
                    className={
                        direction === "row"
                            ? "text-red-500 col-span-4 text-sm"
                            : "text-red-500 text-sm"
                    }
                >
                    {error}
                </p>
            )}
        </div>
    );
};
