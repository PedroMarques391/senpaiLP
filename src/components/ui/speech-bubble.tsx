"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView } from "motion/react";
type TSide = "left" | "right"

interface ISpeechBubble {
    side?: TSide
    children: ReactNode
    style?: string
}

const SpeechBubble = ({ side = "right", children, style }: ISpeechBubble): React.JSX.Element => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <div className={`${side === "left" ? "speechBubble-left" : "speechBubble"}  h-min z-10 ${style} `}>
            <motion.p
                ref={ref}
                initial={{ y: "100%" }}
                animate={{ y: isInView ? 0 : "100%" }}
                transition={{ type: "spring", stiffness: 100, damping: 30 }}
                className='text-slate-300'>{children}</motion.p>
        </div>
    );
};

export default SpeechBubble;