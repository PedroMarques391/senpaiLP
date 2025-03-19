
import React from 'react'

interface ILIProps {
    children: React.ReactNode
}

const LI = ({ children }: ILIProps): React.JSX.Element => {
    return (
        <li className='p-2 w-full text-center'>{children}</li>
    )
}

export default LI