import React from 'react'
import { NavItem } from './NavItem'
import Link from 'next/link'

const MenuDesktop = (): React.JSX.Element => {
    return (
        <ul className="hidden md:flex justify-center items-center gap-x-3 flex-1">
            <NavItem >Inicio</NavItem>
            <NavItem >Como Usar</NavItem>
            <NavItem >Planos</NavItem>
            <NavItem >Sobre Nós</NavItem>
            <Link
                href="https://wa.me/555497153068?text=Ol%C3%A1%20senpai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link que leva para o número do bot."
                className="p-4 text-white bg-gradient-to-r from-pink-500 to-red-500 rounded-lg font-semibold transition-all duration-300 hover:brightness-110 hover:scale-105 shadow-lg md:text-base text-center"
            >
                Converse com a Senpai
            </Link>
        </ul>
    )
}

export default MenuDesktop