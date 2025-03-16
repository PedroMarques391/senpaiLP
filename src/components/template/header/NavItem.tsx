import { Button } from '@/components/ui/button'
import React, { DetailedHTMLProps, LiHTMLAttributes } from 'react'

interface INavItemsProps extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
    href?: string
}


export const NavItem = ({ children, ...props }: INavItemsProps): React.JSX.Element => {
    return (
        <li
            {...props}
            className={`text-center w-32 md:w-auto lg:w-32 relative group px-2 `}>
            <Button
                className=" w-full h-full block  bg-transparent hover:bg-transparent text-base lg:text-lg"
            >
                {children}
                <p className={`absolute bottom-0 left-0 group-hover:w-full group-hover:bg-white h-1 bg-white transition-all duration-300 isCurrentPath hover:w-full  w-0`} />
            </Button >
        </li>
    )



}
