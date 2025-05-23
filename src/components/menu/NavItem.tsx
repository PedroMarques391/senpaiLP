"use client"
import Link from 'next/link'
import React, { DetailedHTMLProps, LiHTMLAttributes } from 'react'

interface INavItemsProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    href: string
}


export const NavItem = ({ children, href, ...props }: INavItemsProps): React.JSX.Element => {

    const goToHash = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const isHash = href.startsWith('#')
        if (isHash) {
            e.preventDefault()
            const el = document.querySelector(href)
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            }
            history.pushState(null, '', href)
        }
    }
    return (
        <li
            {...props}

            className={`text-center w-32 md:w-auto relative group px-3 `}>
            <Link
                onClick={goToHash}
                href={href}
                className=" w-full h-full block py-4 bg-transparent hover:bg-transparent text-base lg:text-lg text-center"
            >
                {children}
                <p className={`absolute bottom-0 left-0 group-hover:w-full group-hover:bg-white h-1 bg-white transition-all duration-300 isCurrentPath hover:w-full  w-0`} />
            </Link>
        </li>
    )



}
