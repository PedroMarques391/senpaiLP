import { motion } from "framer-motion";
import React from "react";

const AnimatedCheckCircle = (): React.JSX.Element => {
    return (
        <motion.svg
            viewBox="0 0 50 50"
            width="120"
            height="120"
            initial="hidden"
            animate="visible"
        >
            <motion.circle
                cx="25"
                cy="25"
                r="22"
                fill="none"
                stroke="#3fd335"
                strokeWidth="4"
                variants={{
                    hidden: { pathLength: 0, rotate: -360 },
                    visible: {
                        pathLength: 1.2,
                        rotate: 0,
                        transition: {
                            duration: 0.6,
                            ease: "easeInOut",
                        },
                    },
                }}
            />

            <motion.path
                d="M14 27 L22 35 L38 19"
                fill="none"
                stroke="#3fd335"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={{
                    hidden: { pathLength: 0 },
                    visible: {
                        pathLength: 1,
                        transition: {
                            delay: 0.6,
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                    },
                }}
            />
        </motion.svg>
    );
};

const AnimatedXCircle = (): React.JSX.Element => {
    return (
        <motion.svg
            viewBox="0 0 50 50"
            width={120}
            height={120}
            initial="hidden"
            animate="visible"
        >
            <motion.circle
                cx="25"
                cy="25"
                r="22"
                fill="none"
                stroke="#ff0000"
                strokeWidth="4"
                variants={{
                    hidden: { pathLength: 0, rotate: -360 },
                    visible: {
                        pathLength: 1.2,
                        rotate: 0,
                        transition: {
                            duration: 0.6,
                            ease: "easeInOut",
                        },
                    },
                }}
            />

            <motion.path
                d="M 15 15 L 35 35 M 35 15 L 15 35"
                fill="none"
                stroke="#ff0000"
                strokeWidth="4"
                strokeLinecap="round"
                variants={{
                    hidden: { pathLength: 0 },
                    visible: {
                        pathLength: 1,
                        transition: {
                            delay: 0.6,
                            duration: 0.4,
                            ease: "easeInOut",
                        },
                    },
                }}
            />
        </motion.svg>
    );
};

export {

    AnimatedCheckCircle,
    AnimatedXCircle
}; 
