"use client"
import Logo from "@/components/Logo"
import MenuDesktop from "./MenuDesktop"
import { useEffect, useState } from "react";
import Mobile from "./Mobile";

export const Header = (): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState(false);

    function handleMenu() {
        setIsOpen((prev) => !prev);
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    return (
        <header className={`text-white py-3 flex justify-center items-center z-20 fixed top-0 left-0 transition-colors duration-500 w-full ${scrolled ? "bg-black/80" : "bg-none"
            }`}>
            <nav className="w-full max-w-6xl flex justify-between items-center md:mx-5 lg:mx-0 relative px-5 ">
                <Logo />
                <button aria-label="Abrir/fechar Menu" onClick={handleMenu} className="md:hidden w-8 h-8  z-20">
                    <div className={`bg-white h-1 mb-1.5 transition-transform block 
                        ${isOpen ? "rotate-45 translate-y-2.5" : "rotate-0"}`} />
                    <div className={`bg-white h-1 mb-1.5 transition-transform block 
                        ${isOpen ? "opacity-0" : "opacity-100"}`} />
                    <div className={`bg-white h-1 mb-1.5 transition-transform block
                        ${isOpen ? "-rotate-45 -translate-y-2.5" : "rotate-0"}`} />
                </button>
                <Mobile
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}

                />
                <MenuDesktop />
            </nav>
        </header>
    )
}
