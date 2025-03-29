"use client"
import React, { useEffect, useState } from 'react'
import { Header } from './header/Header'
import Hero from '../Hero'
import { Footer } from './Footer'
import { LoadingPage } from '../LoadingPage'
import { ArrowUp } from 'lucide-react'


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
    const [loading, setLoading] = useState<boolean>(false);
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
            {loading ? <LoadingPage /> : (
                <main className={`w-full min-h-screen ${backgroundColor} relative`}>
                    {hero ? <Hero /> : <Header background={backgroundHeader} />}
                    <section className={`${container && "container"}  mx-auto  overflow-hidden `}>
                        {children}
                    </section>
                    <Footer />

                    <button
                        aria-label='scroll to top'
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className={`bg-white text-gray-800 bottom-10 right-5 lg:right-12 fixed h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-opacity duration-500 transform hover:scale-110 z-30 ${showButton ? "opacity-100" : "opacity-0"}`} >
                        <ArrowUp className="h-6 w-6 md:h-8 md:w-8 " />
                    </button>

                </main>
            )}
        </>
    )
}

export default Layout