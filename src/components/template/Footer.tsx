import LI from "@/components/ui/LI"
import Logo from "../Logo";

export const Footer = () => {
    return (
        <footer className="bg-black text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mx-auto place-items-center">
                    <div className="flex flex-col justify-center items-center sm:items-start">
                        <Logo />
                        <h1 className="text-xl sm:text-2xl font-semibold mb-4">Sobre Nós</h1>
                        <p className="text-center sm:text-left text-gray-400 text-sm sm:text-base">
                            Informações sobre nossa empresa e missão. Comprometidos com qualidade e inovação.
                        </p>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <h1 className="text-xl sm:text-2xl font-semibold mb-4 text-center w-full">Links Rápidos</h1>
                        <ul className="space-y-1 w-full">
                            <LI href="#" alt="scrool para o inicio do site.">
                                Home
                            </LI>
                            <LI href="#func" alt="Scroll direto para os cards de serviços.">
                                Services
                            </LI>
                            <LI href="#plans" alt="Scroll que leva para os planos disponveis.">
                                Planos
                            </LI>
                            <LI href="/termo-de-uso" target="_blank" alt="">
                                Termos de Uso
                            </LI>
                            <LI href="/privacidade" alt="Link para a política de privacidade do bot.">
                                Política de Privacidade
                            </LI>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <h1 className="text-xl sm:text-2xl font-semibold mb-4 w-full">Siga-nos</h1>
                        <ul className="w-full mx-auto space-y-1">
                            <LI
                                alt="Comunidade no whatsapp"
                                href="https://www.whatsapp.com/channel/0029VatyGWjFcow5imozTp2r">
                                Comunidade
                            </LI>
                            <LI
                                href="https://www.instagram.com/@botdosenpai"
                                alt="Instagram">
                                Instagram
                            </LI>
                            <LI
                                href="https://www.twitter.com/@botdosenpai"
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
