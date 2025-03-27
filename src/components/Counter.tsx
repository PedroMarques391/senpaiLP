"use  client"
import { useTransform, useMotionValue, motion, animate, useInView } from "motion/react"
import { useEffect, useRef } from "react"

interface ICounterProps {
    number: number
    type: string
}

const Counter = ({ number, type }: ICounterProps): React.JSX.Element => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        console.log(isInView)
        if (isInView) {
            const controls = animate(count, number, { duration: 5 })
            return () => controls.stop()
        }
        return () => count.set(0)
    }, [isInView, count, number])

    return (
        <div
            ref={ref}
            className="flex justify-center items-center gap-2 font-sans">
            <motion.p>
                {rounded}
            </motion.p>
            <p>{type}</p>
        </div>
    )
}

export default Counter