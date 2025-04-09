"use client"
import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import { Footer } from './Footer'
import { LoadingPage } from '@/src/components/shared/LoadingPage'
import { MessageCircleMoreIcon } from 'lucide-react'
import { Header } from './Header'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'

import FormDialog from '../ui/form-diolog'



interface ILayoutProps {
    children: React.ReactNode
    hero: boolean
    backgroundColor?: string
    backgroundHeader?: string
    container?: boolean
}

const Layout = ({
    children,
    hero,
    backgroundColor = "bg-white",
    backgroundHeader = "bg-transparent",
    container = true
}: ILayoutProps): React.JSX.Element => {
    const [loading, setLoading] = useState<boolean>(true);
    const [showButton, setShowButton] = useState<boolean>(false);

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
                        <Dialog >
                            <DialogTrigger asChild>
                                <button
                                    aria-label='scroll to top'
                                    className={`bg-white text-gray-800 bottom-10 right-5 lg:right-12 fixed h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-opacity duration-500 transform hover:scale-110 z-30 ${showButton ? "opacity-100" : "opacity-0"}`} >
                                    <MessageCircleMoreIcon className="h-6 w-6 md:h-8 md:w-8 " />
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
                                <FormDialog />
                            </DialogContent>
                        </Dialog>
                    </main>
                )}
        </>
    )
}

export default Layout




