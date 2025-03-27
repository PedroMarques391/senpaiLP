"use  client"
import { useTransform, useMotionValue, motion, animate } from "motion/react"
import { useEffect } from "react"

interface ICounterProps {
    number: number
    type: string
}

const Counter = ({ number, type }: ICounterProps): React.JSX.Element => {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, number, { duration: 5 })
        return () => controls.stop()
    }, [])

    return (
        <div className="flex justify-center items-center gap-2 font-sans">
            <motion.p >
                {rounded}
            </motion.p>
            <p>{type}</p>
        </div>
    )
}

export default Counter