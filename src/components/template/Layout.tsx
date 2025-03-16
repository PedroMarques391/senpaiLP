import React from 'react'
import { Header } from './header/Header'
import Hero from '../Hero'


interface ILayoutProps {
    children: React.ReactNode
    hero: boolean
}

const Layout = ({ children, hero }: ILayoutProps): React.JSX.Element => {
    return (
        <main className='w-full h-screen bg-white'>
            {hero ? <Hero /> : <Header />}
            <section className='container mx-auto p-2'>
                {children}
            </section>
        </main>
    )
}

export default Layout