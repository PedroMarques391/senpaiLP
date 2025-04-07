import { ReactNode } from "react"



const Title = ({ children }: { children: ReactNode }): React.JSX.Element => {
    return (
        <h1
            className="px-4 py-5 md:py-10 font-bold tracking-widest text-lg text-left md:text-xl lg:text-2xl"
        >{children}</h1>
    )
}

export default Title