"use client";
import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import { Footer } from "./Footer";
import { Headset } from "lucide-react";
import { Header } from "./Header";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import FormDialog from "@/src/components/ui/form-diolog";
import { FormField } from "../ui/form-field";
import { FormProvider } from "react-hook-form";
import { useEmailForm } from "@/src/hooks/useEmailForm";
import { useTranslations } from "next-intl";

interface ILayoutProps {
    children: React.ReactNode
    hero?: boolean
    backgroundColor?: string
    backgroundHeader?: string
    container?: boolean
    load?: boolean
}

const Layout = ({
    children,
    hero = false,
    backgroundColor = "bg-surface",
    backgroundHeader = "bg-transparent",
    container = true,
}: ILayoutProps): React.JSX.Element => {
    const [showButton, setShowButton] = useState<boolean>(false);
    const methods = useEmailForm("full");
    const t = useTranslations("components.dialog");

    useEffect(() => {
        const handleScroll = (): void => {
            setShowButton(window.scrollY > 150);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (

        <main className={`w-full min-h-screen ${backgroundColor} relative `}>
            {hero ? <Hero /> : <Header background={backgroundHeader} />}
            <section className={`${container && "container"}  mx-auto  overflow-hidden `}>
                {children}
            </section>
            <Footer />

            <Dialog onOpenChange={(isOpen) => setShowButton(!isOpen)} >
                <DialogTrigger asChild>
                    <button
                        aria-label='call support'
                        className={`bg-gradient-to-b from-[#fa8aa4] via-[#f097ac] to-[#f2b2c1] p-2 flex flex-col bottom-10 right-5 lg:right-12 fixed  md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-2xl items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-opacity duration-500 z-30 ${showButton ? "opacity-100" : "opacity-0"}`} >
                        <Headset className="h-6 w-6 md:h-8 md:w-8 mb-1" />
                        <span className="text-xs md:text-sm">{t("support")}</span>
                    </button>
                </DialogTrigger>
                <DialogContent
                    className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>
                           {t("supportForm.title")}
                        </DialogTitle>
                        <DialogDescription>
                           {t("supportForm.subtitle")}
                        </DialogDescription>
                    </DialogHeader>
                    <FormProvider {...methods} >
                        <FormDialog >
                            <FormField
                                label={t("supportForm.label.name")}
                                name="name"
                            />

                            <FormField
                                label={t("supportForm.label.email")}
                                name="email"
                                type="email"
                            />

                            <FormField
                                label={t("supportForm.label.phone")}
                                name="phone"
                                maxLength={15}
                            />

                            <FormField
                                label={t("supportForm.label.subject")}
                                name="subject"
                            />

                            <FormField
                                label={t("supportForm.label.message")}
                                name="message"
                                type="textarea"
                            />
                        </FormDialog>
                    </FormProvider>
                </DialogContent>
            </Dialog>
        </main>
    );
};

export default Layout;
