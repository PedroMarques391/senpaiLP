import { termsOfUse } from "@/data/utils";
import Link from "next/link";

const TermsOfUse = () => {
    return (
        <main className="min-h-screen bg-gray-100 text-black px-6 md:px-16 py-12 flex items-center justify-center">
            <div className="max-w-4xl bg-white p-10 rounded-2xl shadow-lg border border-gray-300">
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
                    Termos de Uso do Bot do Senpai
                </h1>

                <p className="text-gray-600 mb-8 text-center leading-relaxed">
                    Leia atentamente antes de utilizar o serviço.
                </p>

                <section className="space-y-6 divide-y divide-gray-200">
                    {termsOfUse.map((section, index) => (
                        <div key={index} className="py-4">
                            <h2 className="text-xl font-semibold text-gray-700 mb-2">{section.title}</h2>
                            <p className="text-gray-600 leading-relaxed">{section.text}</p>
                        </div>
                    ))}
                </section>

                <div className="text-center mt-8">
                    <p className="text-gray-600">Em caso de dúvidas, entre em contato:</p>
                    <Link
                        href="mailto:contato@botdosenpai.com.br" target="_blank" rel="noreferrer" className="text-teal-500 font-semibold hover:text-teal-600 transition-colors" >
                        contato@botdosenpai.com.br
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default TermsOfUse;