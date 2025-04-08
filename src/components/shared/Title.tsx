import { ReactNode } from "react"



interface ITitleProps {
    children: ReactNode;
    center?: boolean;
}

const Title = ({ children, center = false }: ITitleProps): React.JSX.Element => {
    return (
        <h1
            className={`px-4 py-5 md:py-10 font-bold tracking-widest text-lg md:text-xl lg:text-2xl w-full ${center ? "text-center" : "text-left"
                }`}
        >
            {children}
        </h1>
    )
}

export default Title