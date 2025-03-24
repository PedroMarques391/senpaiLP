import Link from "next/link";
import LI from "@/components/ui/LI"
import Logo from "../Logo";

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mx-auto place-items-center">
                    <div className="flex flex-col justify-center items-center sm:items-start">
                        <Logo />
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Sobre Nós</h3>
                        <p className="text-center sm:text-left text-gray-400 text-sm sm:text-base">
                            Informações sobre nossa empresa e missão. Comprometidos com qualidade e inovação.
                        </p>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Links Rápidos</h3>
                        <ul className="space-y-3 w-full">
                            <LI>
                                <Link
                                    href="#"
                                    className="text-gray-400 hover:text-white transition duration-300 w-full text-center"
                                    aria-label="Home"
                                >
                                    Home
                                </Link>
                            </LI>
                            <LI>
                                <Link
                                    href="#func"
                                    className="text-gray-400 hover:text-white transition duration-300 w-full text-center"
                                    aria-label="Funcionalidades"
                                >
                                    Services
                                </Link>
                            </LI>
                            <LI>
                                <Link
                                    href="#palns"
                                    className="text-gray-400 hover:text-white transition duration-300 w-full text-center "
                                    aria-label="planos"
                                >
                                    Planos
                                </Link>
                            </LI>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Siga-nos</h3>
                        <ul className="w-full mx-auto space-y-3">
                            <LI>
                                <Link
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition duration-300"
                                    aria-label="Facebook"
                                >
                                    Facebook
                                </Link>
                            </LI>
                            <LI>
                                <Link
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition duration-300"
                                    aria-label="Instagram"
                                >
                                    Instagram
                                </Link>
                            </LI>
                            <LI>
                                <Link
                                    href="https://www.twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition duration-300"
                                    aria-label="Twitter"
                                >
                                    Twitter
                                </Link>
                            </LI>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">© 2025 Todos os direitos reservados</p>
                </div>
            </div>
        </footer>

    );
};
