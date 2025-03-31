import LI from "@/components/ui/LI"
import Logo from "../Logo";
import { usePathname } from "next/navigation";

export const Footer = () => {
    const path = usePathname()
    const isHomePage = path === "/"


    return (
        <footer className="bg-black text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mx-auto place-items-center">
                    <div className="flex flex-col justify-center items-center sm:items-start md:col-span-1">
                        <Logo />
                    </div>
                    <div className="flex flex-col items-center sm:items-start md:col-span-2">
                        <h1 className="text-xl sm:text-2xl font-semibold mb-4 text-center w-full">Links Rápidos</h1>
                        <ul className="grid grid-cols-2 w-full ">
                            <LI
                                prefetch={isHomePage ? false : true}
                                href={isHomePage ? "#home" : "/#home"} alt="scrool para o inicio do site.">
                                Home
                            </LI>
                            <LI
                                prefetch={isHomePage ? false : true}
                                href={isHomePage ? "#func" : "/#func"} alt="Scroll direto para os cards de serviços.">
                                Services
                            </LI>
                            <LI
                                prefetch={isHomePage ? false : true}
                                href={isHomePage ? "#plans" : "/#plans"} alt="Scroll que leva para os planos disponveis.">
                                Planos
                            </LI>
                            <LI href="/about" target="_blank" alt="link para os termos de uso do bot">
                                Sobre Nós
                            </LI>
                            <LI href="/termo-de-uso" target="_blank" alt="link para os termos de uso do bot">
                                Termos de Uso
                            </LI>
                            <LI href="/privacidade" target="_blank" alt="Link para a política de privacidade do bot.">
                                Política de Privacidade
                            </LI>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2 md:col-span-1 w-full">
                        <h1 className="text-xl sm:text-2xl font-semibold mb-4 w-full text-center">Siga-nos</h1>
                        <ul className="w-full mx-auto space-y-1">
                            <LI
                                target="_blank"
                                alt="Comunidade no whatsapp"
                                href="https://www.whatsapp.com/channel/0029VatyGWjFcow5imozTp2r">
                                Comunidade
                            </LI>
                            <LI
                                target="_blank"
                                href="https://www.instagram.com/botdosenpai"
                                alt="Instagram">
                                Instagram
                            </LI>
                            <LI
                                target="_blank"
                                href="https://www.twitter.com/botdosenpai"
                                alt="Twitter">
                                Twitter
                            </LI>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-500">© 2025 Todos os direitos reservados</p>
                </div>
            </div>
        </footer >

    );
};
