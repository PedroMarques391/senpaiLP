"use client"
import Logo from "@/src/components/shared/Logo"
import MenuDesktop from "@/src/components/menu/MenuDesktop"
import { useEffect, useState } from "react";
import Mobile from "@/src/components/menu/Mobile";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";


type IHeaderProps = { background?: string }

export const Header = ({ background }: IHeaderProps): React.JSX.Element => {
    const path = usePathname()
    const locale = useLocale()

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean | null>(null);

    function handleHref(href: string): string {
        const isHomePage: boolean = path === `/${locale}`

        console.log(isHomePage)

        return isHomePage ? `#${href}` : `/${locale}#${href}`

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
        <header className={`text-content-inverse py-3 flex justify-center font-sans items-center fixed top-0 left-0 transition-colors duration-500 w-full z-30 ${scrolled ? "bg-secondary-theme/90" : background
            }`}>
            <nav className="w-full max-w-6xl flex justify-between items-center mx-4 relative gap-2">
                <Logo />
                <button aria-label="Abrir/fechar Menu" onClick={handleMenu} className="lg:hidden w-8 h-8 z-20">
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
