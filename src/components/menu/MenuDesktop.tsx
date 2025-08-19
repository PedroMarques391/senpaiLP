"use client"
import React from 'react'
import { NavItem } from './NavItem'
import Link from 'next/link'

export interface IMenuProps {
    handleHref: (href: string) => string
}

const MenuDesktop = ({ handleHref }: IMenuProps): React.JSX.Element => {

    return (
        <ul className="hidden md:flex justify-center items-center gap-5">
            <NavItem href={handleHref('home')} >Inicio</NavItem>
            <NavItem href={handleHref('func')} >Funcionalidades</NavItem>
            <NavItem href={handleHref('plans')}>Assinaturas</NavItem>
            <NavItem href='/about' >Sobre Nós</NavItem>
            <NavItem href='/Seja um parceiro' >Seja um Parceiro</NavItem>
            <Link
                href="https://wa.me/555497153068?text=Ol%C3%A1%20senpai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link que leva para o número do bot."
                className="p-2 bg-gradient-to-r text-content-secondary from-[#fa8aa4] via-[#f097ac] to-[#f2b2c1] rounded-lg font-semibold transition-all duration-300 text-whitw hover:brightness-110 hover:scale-105 shadow-lg md:text-base text-center text-sm inline-flex w-fit"
            >
                <p className='text-xs lg:text-base'>Converse com a Senpai</p>
            </Link>
        </ul>
    )
}

export default MenuDesktop