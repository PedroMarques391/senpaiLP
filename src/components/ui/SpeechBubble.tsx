import { ReactNode, } from 'react'
type TSide = "left" | "right"

interface ISpeechBubble {
    side?: TSide
    children: ReactNode
    style?: string
}

const SpeechBubble = ({ side = "right", children, style }: ISpeechBubble): React.JSX.Element => {
    return (
        <div className={`${side === "left" ? "speechBubble-left" : "speechBubble"}  h-min z-10 ${style}`}>
            <p className='text-slate-300'>{children}</p>
        </div>
    )
}

export default SpeechBubble