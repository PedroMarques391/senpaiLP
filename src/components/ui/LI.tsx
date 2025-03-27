
import Link from 'next/link'
import React from 'react'

interface ILIProps {
    children: React.ReactNode
    alt: string
    href: string
    target?: "_blank" | "_self"
}

const LI = ({ children, alt, href, target = "_self" }: ILIProps): React.JSX.Element => {
    return (
        <li className='p-2 w-full text-center flex justify-center items-center'>
            <Link
                href={href}
                target={target}
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-300"
                aria-label={alt}
            >
                {children}
            </Link>
        </li>
    )
}

export default LI