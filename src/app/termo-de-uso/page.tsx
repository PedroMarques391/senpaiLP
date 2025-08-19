import Layout from "@/src/components/layout/Layout";
import { termsOfUse } from "@/src/data";
import Link from "next/link";

const TermsOfUse = (): React.JSX.Element => {
    return (
        <Layout
            backgroundColor="bg-gray-100"
            backgroundHeader="bg-senpai-header"
        >
            <main className="min-h-screen text-content-primary px-6 md:px-16 flex items-center justify-center pt-30">
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

                    <div className="text-center mt-8">
                        <Link prefetch
                            href="/"
                            aria-label="Botão para voltar à página inicial."
                            className="inline-block bg-teal-500 text-content-inverse font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-teal-600 transition-all">
                            Voltar para Home
                        </Link>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

export default TermsOfUse;