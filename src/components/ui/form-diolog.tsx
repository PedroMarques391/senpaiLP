import React, { ReactNode, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Button } from "./button";
import ModalMessage from "../sections/ModalMessage";
import { IModalMessage } from "@/src/types";
import { DialogFooter } from "./dialog";
import { useParams } from "next/navigation";
import { FullFormData } from "@/src/hooks/useEmailForm";
import { useTranslations } from "next-intl";

const FormDialog = ({ children }: { children: ReactNode }): React.JSX.Element => {
    const [loading, setLoaging] = useState<boolean>(false);
    const [emailSend, setEmailSend] = useState<boolean>(false);
    const [modalMessageItens, setModalMessageItens] = useState({} as IModalMessage);
    const { locale } = useParams();
    const { handleSubmit, reset } = useFormContext<FullFormData>();
    const t = useTranslations("components.dialog");

    async function userSubmit(data: FullFormData) {
        setLoaging(true);
        await fetch(`/${locale}/api/emails/port`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ ...data, type: "support" })

        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Erro na requisição");
                }
                setEmailSend((prev) => !prev);
                setModalMessageItens({
                    statusIcon: "check",
                    text: t("modal.success.title"),
                    textButton: t("modal.success.textButton"),
                    setEmailSend: setEmailSend
                });
            })
            .catch(() => {
                setEmailSend((prev) => !prev);
                setModalMessageItens({
                    statusIcon: "x",
                    text: t("modal.error.title"),
                    textButton: t("modal.error.textButton"),
                    setEmailSend: setEmailSend
                });
            })
            .finally(() => setLoaging((prev) => !prev));
        reset();
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
                            className={`w-full flex items-center justify-center gap-2 transition-all duration-300 ${loading ? "bg-gray-400 text-content-primary cursor-not-allowed" : "bg-black hover:bg-black/80 text-content-inverse"
                                } rounded-2xl py-3 text-base font-semibold `}
                        >
                            {loading ? (
                                <>
                                    <span
                                        className="inline-block h-4 w-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                    <span>{t("sending")}</span>
                                </>
                            ) : (
                                <span>{t("dialogButton")}</span>
                            )}
                        </Button>
                    </DialogFooter>
                </form >
            )}
        </>
    );
};

export default FormDialog;