import { AnimatePresence, motion } from "framer-motion";
import { NavItem } from "./NavItem";

interface IMobileProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            duration: 1.5
        },
    },

};

const variants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { type: "spring", duration: 0.8 } },
    exit: { x: 200, opacity: 0, transition: { duration: 0.5 } },
};

const Mobile = ({ isOpen, setIsOpen }: IMobileProps): React.JSX.Element => {
    return (
        <AnimatePresence >
            {isOpen && (
                <motion.ul
                    className={`
                        border-l-2 border-gray-dark rounded-ss-3xl
                        md:hidden w-full sm:w-2/3 md:w-1/5 bg-black h-screen z-10
                        fixed top-0 right-0
                        flex flex-col justify-center items-center
                        ease-in-out transform
                    `}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                >
                    <motion.div variants={variants}>
                        <NavItem onClick={() => setIsOpen(false)} href="/">Home</NavItem>
                    </motion.div>
                    <motion.div variants={variants}>
                        <NavItem onClick={() => setIsOpen(false)} href="/projects">Projetos</NavItem>
                    </motion.div>
                    <motion.div variants={variants}>
                        <NavItem onClick={() => setIsOpen(false)} href="/about">Sobre Mim</NavItem>
                    </motion.div>
                    <motion.div variants={variants}>
                        <NavItem onClick={() => setIsOpen(false)} href="/contact">Contato</NavItem>
                    </motion.div>
                </motion.ul>
            )}
        </AnimatePresence>
    );
};

export default Mobile;