"use client"
import React from 'react'
import { NavItem } from './NavItem'
import Link from 'next/link'

export interface IMenuProps {
    isHomePage: boolean
}

const MenuDesktop = ({ isHomePage }: IMenuProps): React.JSX.Element => {

    return (
        <ul className="hidden md:flex justify-center items-center gap-x-3 ">
            <NavItem href={isHomePage ? "#home" : "/#home"} >Inicio</NavItem>
            <NavItem href={isHomePage ? "#func" : "/#func"} >Funcionalidades</NavItem>
            <NavItem href={isHomePage ? "#plans" : "/#plans"}>Assinaturas</NavItem>
            <NavItem href='/about' >Sobre Nós</NavItem>
            <Link
                href="https://wa.me/555497153068?text=Ol%C3%A1%20senpai"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link que leva para o número do bot."
                className="p-2 bg-gradient-to-r text-black/80 from-[#7acfdd] via-[#97d5df] to-slate-50 rounded-lg font-semibold transition-all duration-300 hover:brightness-110 hover:scale-105 shadow-lg md:text-base text-center text-sm inline-flex w-fit"
            >
                <p className='text-xs lg:text-base'>Converse com a Senpai</p>
            </Link>
        </ul>
    )
}

export default MenuDesktop