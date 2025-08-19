
import Link from 'next/link'
import React from 'react'

interface ILIProps {
    children: React.ReactNode
    alt: string
    href: string
    target?: "_blank" | "_self"
    prefetch?: boolean
}

const LI = ({ children, alt, href, target = "_self", prefetch = true }: ILIProps): React.JSX.Element => {
    return (
        <li className='p-2 w-full text-center flex justify-center items-center'>
            <Link
                href={href}
                target={target}
                prefetch={prefetch}
                rel="noopener noreferrer"
                className="text-content-inverse hover:text-surface transition duration-300 w-full text-base md:text-xs lg:text-base"
                aria-label={alt}
            >
                {children}
            </Link>
        </li>
    )
}

export default LI