"use client"
import Logo from "@/src/components/shared/Logo"
import MenuDesktop from "@/src/components/menu/MenuDesktop"
import { useEffect, useState } from "react";
import Mobile from "@/src/components/menu/Mobile";
import { usePathname } from "next/navigation";


type IHeaderProps = { background?: string }

export const Header = ({ background }: IHeaderProps): React.JSX.Element => {
    const path = usePathname()

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState(false);

    function handleHref(href: string): string {
        const isHomePage: boolean = path === "/"

        return isHomePage ? `#${href}` : `/#${href}`

    }

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
        <header className={`text-white py-3 flex justify-center font-sans items-center fixed top-0 left-0 transition-colors duration-500 w-full z-30 ${scrolled ? "bg-black/80" : background
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
                    handleHref={handleHref}


                />
                <MenuDesktop
                    handleHref={handleHref}
                />
            </nav>
        </header>
    )
}
