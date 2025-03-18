export const Footer = () => {
    return (
        <footer className="bg-black text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 mx-auto place-items-center">
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="text-xl font-semibold mb-4">Sobre Nós</h3>
                        <p className="text-center sm:text-left text-gray-400">Informações sobre nossa empresa e missão. Comprometidos com qualidade e inovação.</p>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="text-xl font-semibold mb-4">Links Rápidos</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Planos</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contato</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="text-xl font-semibold mb-4">Siga-nos</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Facebook</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Instagram</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Twitter</a></li>
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
