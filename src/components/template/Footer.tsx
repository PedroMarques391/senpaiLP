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
                            <LI href="#" alt="scrool para o inicio do site.">
                                Home
                            </LI>
                            <LI href="#func" alt="Scroll direto para os cards de serviços.">
                                Services
                            </LI>
                            <LI href="#plans" alt="Scroll que leva para os planos disponveis.">
                                Planos
                            </LI>
                            <LI href="/terms" target="_blank" alt="">
                                Termos de Uso
                            </LI>
                            <LI href="/privacy" alt="Link para a política de privacidade do bot.">
                                Política de Privacidade
                            </LI>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Siga-nos</h3>
                        <ul className="w-full mx-auto space-y-3">
                            <LI
                                alt="facebook"
                                href="https://www.facebook.com"
                            >
                                facebook
                            </LI>
                            <LI
                                href="https://www.instagram.com"
                                alt="Instragram"
                            >

                                Instagram

                            </LI>
                            <LI
                                href="https://www.twitter.com"
                                alt="Twitter"
                            >

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
