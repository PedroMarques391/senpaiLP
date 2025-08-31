import { useForm, DefaultValues } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ChangeEvent } from "react";
import { insertMaskInPhone } from "../utils";
import { useTranslations } from "next-intl";

export const createSchemas = (t: (key: string) => string) => {
    const emailSchema = z.object({
        name: z.string().min(4, t("name")),
        email: z.string().email(t("email")),
        phone: z
            .string()
            .min(1, t("phone"))
            .refine((value) => /^[\d()\-\s]{14,15}$/.test(value), {
                message: t("invalidNumber"),
            }),
    });

    const fullSchema = emailSchema.extend({
        subject: z.string().min(5, t("subject")),
        message: z
            .string()
            .min(1, t("message"))
            .max(250, t("maxCharacters")),
    });

    return { emailSchema, fullSchema };
};

export type PartialFormData = z.infer<ReturnType<typeof createSchemas>["emailSchema"]>;
export type FullFormData = z.infer<ReturnType<typeof createSchemas>["fullSchema"]>;

type FormSchema = PartialFormData | FullFormData;

export function useEmailForm(
    schemaType: "partial" | "full",
    defaultValues?: DefaultValues<FormSchema>
) {
    const t = useTranslations("components.dialog.formErrors");
    const { emailSchema, fullSchema } = createSchemas(t);

    const schema = schemaType === "partial" ? emailSchema : fullSchema;

    const methods = useForm<FormSchema>({
        resolver: zodResolver(schema),
        mode: "onChange",
        defaultValues,
    });

    function handleMask(e: ChangeEvent<HTMLInputElement>): void {
        const formattedPhone = insertMaskInPhone(e.target.value);
        methods.setValue("phone", formattedPhone as any);
        methods.clearErrors("phone");
    }

    return {
        ...methods,
        handleMask,
    };
}
