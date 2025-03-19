"use client"
import React, { useEffect, useState } from 'react'
import { Header } from './header/Header'
import Hero from '../Hero'
import { Footer } from './Footer'
import { LoadingPage } from '../LoadingPage'


interface ILayoutProps {
    children: React.ReactNode
    hero: boolean
}

const Layout = ({ children, hero }: ILayoutProps): React.JSX.Element => {
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
                <main className='w-full h-screen bg-white'>
                    {hero ? <Hero /> : <Header />}
                    <section className='container mx-auto p-2 overflow-hidden'>
                        {children}
                    </section>
                    <Footer />
                </main>
            )}
        </>
    )
}

export default Layout