"use client"
import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import { Footer } from './Footer'
import { Headset } from 'lucide-react'
import { Header } from './Header'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import FormDialog from '@/src/components/ui/form-diolog'
import { FormField } from '../ui/form-field'
import { FormProvider } from 'react-hook-form'
import { fullSchema, useEmailForm } from '@/src/hooks/useEmailForm'
import { routing } from '@/src/i18n/routing'
import { useRouter, usePathname } from '@/src/i18n/navigation'
import { useLocale } from 'next-intl'

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
    const methods = useEmailForm(fullSchema)
    const router = useRouter()
    const locale = useLocale()
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = (): void => {
            setShowButton(window.scrollY > 150);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    function handleSelectLocale(currentLocale: (typeof routing.locales)[number]) {
        const query = Object.fromEntries(
            new URLSearchParams(window.location.search)
        )

        router.replace({ pathname, query }, { locale: currentLocale })
    }

    return (


        <main className={`w-full min-h-screen ${backgroundColor} relative `}>
            {hero ? <Hero /> : <Header background={backgroundHeader} />}
            <section className={`${container && "container"}  mx-auto  overflow-hidden `}>
                {children}
            </section>
            <Footer />
            <div className="fixed top-5 right-4 z-50">
                <select
                    defaultValue={locale}
                    onChange={(e) => handleSelectLocale(e.target.value as (typeof routing.locales)[number])}
                    className="bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-md focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                    name="locale"
                    id="locale-select"
                >
                    {routing.locales.map((locale, index) => (
                        <option key={index} value={locale}>
                            {locale.toUpperCase()}
                        </option>
                    ))}
                </select>
            </div>
            <Dialog onOpenChange={(isOpen) => setShowButton(!isOpen)} >
                <DialogTrigger asChild>
                    <button
                        aria-label='call support'
                        className={`bg-gradient-to-b from-[#fa8aa4] via-[#f097ac] to-[#f2b2c1] p-2 flex flex-col bottom-10 right-5 lg:right-12 fixed  md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-2xl items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-opacity duration-500 z-30 ${showButton ? "opacity-100" : "opacity-0"}`} >
                        <Headset className="h-6 w-6 md:h-8 md:w-8 mb-1" />
                        <span className="text-xs md:text-sm">Suporte</span>
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
                            />

                            <FormField
                                label="E-mail"
                                name="email"
                                type="email"
                            />

                            <FormField
                                label="Telefone"
                                name="phone"
                                maxLength={15}
                            />

                            <FormField
                                label="Assunto"
                                name="subject"
                            />

                            <FormField
                                label="Mensagem"
                                name="message"
                                type="textarea"
                            />
                        </FormDialog>
                    </FormProvider>
                </DialogContent>
            </Dialog>
        </main>
    )
}

export default Layout




