import React from 'react'


interface ILayoutProps {
    children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps): React.JSX.Element => {
    return (
        <main className='w-full h-screen bg-gradient-to-b from-fuchsia-300 via-fuchsia-50 to-slate-50'>
            {children}
        </main>
    )
}

export default Layout