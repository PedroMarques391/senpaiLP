"use  client"
import { useTransform, useMotionValue, motion, animate } from "motion/react"
import { useEffect } from "react"

interface ICounterProps {
    number: number
}

const Counter = ({ number }: ICounterProps): React.JSX.Element => {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, number, { duration: 5 })
        return () => controls.stop()
    }, [])

    return (
        <motion.pre>
            {rounded}
        </motion.pre>
    )
}

export default Counter