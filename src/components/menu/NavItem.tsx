'use client'
import { scrollSmooth } from '@/src/utils/scrollSmooth'
import Link, { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

interface INavItemsProps extends LinkProps, AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    children: React.ReactNode
}

export const NavItem = ({ children, href, ...props }: INavItemsProps): React.JSX.Element => {

    const goToHash = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (href.startsWith('#')) {
            scrollSmooth(href)
            e.preventDefault()
            history.pushState(null, '', href)
        }
    }

    return (
        <li className="text-center w-32 md:w-auto relative group ">
            <Link
                {...props}
                onClick={goToHash}
                href={href}
                className="w-full h-full block py-4 px-2 bg-transparent hover:bg-transparent text-center whitespace-nowrap">
                {children}
                <p className={`absolute bottom-0 left-0 h-1 bg-white transition-all duration-300 w-0 group-hover:w-full`}
                />
            </Link>
        </li>
    )
}
