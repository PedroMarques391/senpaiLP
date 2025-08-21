import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { steps } from "@/src/data";

export function StepsSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref} className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
                <motion.h1
                    className="text-3xl md:text-4xl font-bold text-secondary-theme mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    O Processo é Simples
                </motion.h1>

                <div className="relative">
                    <motion.div
                        initial={{ width: "0%" }}
                        animate={isInView ? { width: '100%' } : {}}
                        transition={{ duration: 1.5, ease: "easeOut" }}


                        className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-secondary-theme -translate-y-1/2"></motion.div>

                    <div className="relative flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className="flex flex-col items-center text-center w-full md:w-1/3 px-4"
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                    ease: "easeOut",
                                }}
                            >
                                <motion.div
                                    className="bg-primary-theme text-content-inverse rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4 z-10"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.2 + 0.2,
                                        ease: "easeOut",
                                    }}
                                >
                                    {step.id}
                                </motion.div>
                                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
