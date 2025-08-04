"use client"
import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import { Footer } from './Footer'
import { LoadingPage } from '@/src/components/shared/LoadingPage'
import { Headset } from 'lucide-react'
import { Header } from './Header'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import FormDialog from '@/src/components/ui/form-diolog'
import { FormField } from '../ui/form-field'
import { FormProvider } from 'react-hook-form'
import { useEmailForm } from '@/src/hooks/useEmailForm'

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
    backgroundColor = "bg-white",
    backgroundHeader = "bg-transparent",
    container = true,
    load = true
}: ILayoutProps): React.JSX.Element => {
    const [loading, setLoading] = useState<boolean>(load);
    const [showButton, setShowButton] = useState<boolean>(false);

    const methods = useEmailForm()

    const { register, formState: { errors }, handleMask } = methods


    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(loadingTimeout);
    }, []);

    useEffect(() => {
        const handleScroll = (): void => {
            setShowButton(window.scrollY > 150);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    return (
        <>
            {loading ?
                <LoadingPage />
                : (
                    <main className={`w-full min-h-screen ${backgroundColor} relative`}>
                        {hero ? <Hero /> : <Header background={backgroundHeader} />}
                        <section className={`${container && "container"}  mx-auto  overflow-hidden `}>
                            {children}
                        </section>
                        <Footer />
                        <Dialog onOpenChange={(isOpen) => setShowButton(!isOpen)} >
                            <DialogTrigger asChild>
                                <button
                                    aria-label='call support'
                                    className={`bg-white/80 p-2 flex flex-col bottom-10 right-5 lg:right-12 fixed h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-2xl items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-opacity duration-500 z-30 ${showButton ? "opacity-100" : "opacity-0"}`} >
                                    <Headset className="h-6 w-6 md:h-8 md:w-8 mb-1" />
                                    <span className="text-xs md:text-sm ">Suporte</span>
                                </button>
                            </DialogTrigger>
                            <DialogContent
                                className="sm:max-w-[425px]">
                                <DialogHeader>
                                    <DialogTitle>
                                        Suporte ao Cliente
                                    </DialogTitle>
                                    <DialogDescription>
                                        Online todos os dias, 24h por dia, sempre que precisar
                                    </DialogDescription>
                                </DialogHeader>
                                <FormProvider {...methods} >
                                    <FormDialog >
                                        <FormField
                                            label="Nome"
                                            name="name"
                                            register={register}
                                            error={errors.name?.message}
                                        />

                                        <FormField
                                            label="E-mail"
                                            name="email"
                                            type="email"
                                            register={register}
                                            error={errors.email?.message}
                                        />

                                        <FormField
                                            label="Telefone"
                                            name="phone"
                                            register={register}
                                            error={errors.phone?.message}
                                            onChange={handleMask}
                                            maxLength={15}
                                        />

                                        <FormField
                                            label="Assunto"
                                            name="subject"
                                            register={register}
                                            error={errors.subject?.message}
                                        />

                                        <FormField
                                            label="Mensagem"
                                            name="message"
                                            type="textarea"
                                            register={register}
                                            error={errors.message?.message}
                                        />
                                    </FormDialog>
                                </FormProvider>
                            </DialogContent>
                        </Dialog>
                    </main>
                )}
        </>
    )
}

export default Layout




