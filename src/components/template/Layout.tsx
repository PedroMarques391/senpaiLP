"use client"
import React, { useEffect, useState } from 'react'
import { Header } from './header/Header'
import Hero from '../Hero'
import { Footer } from './Footer'
import { LoadingPage } from '../LoadingPage'


interface ILayoutProps {
    children: React.ReactNode
    hero: boolean
    backgroundColor?: string
    backgroundHeader?: string
}

const Layout = ({ children, hero, backgroundColor = "bg-white", backgroundHeader = "bg-transparent" }: ILayoutProps): React.JSX.Element => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setLoading(false);
        }, 700);

        return () => clearTimeout(loadingTimeout);
    }, []);
    return (
        <>
            {loading ? <LoadingPage /> : (
                <main className={`w-full min-h-screen ${backgroundColor}`}>
                    {hero ? <Hero /> : <Header background={backgroundHeader} />}
                    <section className='container mx-auto py-5 px-3 overflow-hidden '>
                        {children}
                    </section>
                    <Footer />
                </main>
            )}
        </>
    )
}

export default Layout