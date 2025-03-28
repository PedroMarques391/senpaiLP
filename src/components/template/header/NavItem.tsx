"use client"
import Link from 'next/link'
import React, { DetailedHTMLProps, LiHTMLAttributes, useEffect } from 'react'

interface INavItemsProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    href: string
}


export const NavItem = ({ children, href, ...props }: INavItemsProps): React.JSX.Element => {

    useEffect(() => {
        const hash = window.location.hash
        if (hash) {
            const el = document.querySelector(hash)
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            }
        }
    }, [])

    return (
        <li
            {...props}

            className={`text-center w-32 md:w-auto relative group px-3 `}>
            <Link
                scroll={true}
                href={href}
                className=" w-full h-full block py-4 bg-transparent hover:bg-transparent text-base lg:text-lg text-center"
            >
                {children}
                <p className={`absolute bottom-0 left-0 group-hover:w-full group-hover:bg-white h-1 bg-white transition-all duration-300 isCurrentPath hover:w-full  w-0`} />
            </Link>
        </li>
    )



}
