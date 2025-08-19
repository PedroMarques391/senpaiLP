import { AnimatePresence, motion } from "framer-motion";
import { NavItem } from "./NavItem";
import Link from "next/link";
import { IMenuProps } from "./MenuDesktop";

interface IMobileProps extends IMenuProps {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    handleHref: (href: string) => string
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

const Mobile = ({ isOpen, setIsOpen, handleHref }: IMobileProps): React.JSX.Element => {
    return (
        <AnimatePresence >
            {isOpen && (
                <motion.ul
                    className={`
                        border-l-2 border-gray-dark rounded-ss-3xl
                        md:hidden w-4/5 sm:w-2/3 md:w-1/5 bg-secondary-theme h-screen z-10
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
                        <NavItem onClick={() => setIsOpen(false)} href={handleHref('home')}>Inicio</NavItem>
                    </motion.div>
                    <motion.div variants={variants}>
                        <NavItem onClick={() => setIsOpen(false)} href={handleHref('func')}>Funcionalidades</NavItem>
                    </motion.div>
                    <motion.div variants={variants}>
                        <NavItem onClick={() => setIsOpen(false)} href={handleHref('plans')}>Assinaturas</NavItem>
                    </motion.div>
                    <motion.div variants={variants}>
                        <NavItem onClick={() => setIsOpen(false)} href="/about">Sobre Nós</NavItem>
                    </motion.div>
                    <div>
                        <Link
                            onClick={() => setIsOpen(false)}
                            href="https://wa.me/555497153068?text=Ol%C3%A1%20senpai"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Link que leva para o número do bot."
                            className="p-4 bg-gradient-to-r text-content-secondary from-[#fa8aa4] via-[#f097ac] to-[#f2b2c1] rounded-lg font-semibold transition-all duration-300 hover:brightness-110 hover:scale-105 shadow-lg md:text-base text-center fixed top-5 left-5"
                        >
                            Converse com a Senpai
                        </Link>
                    </div>
                </motion.ul>
            )}
        </AnimatePresence>
    );
};

export default Mobile;