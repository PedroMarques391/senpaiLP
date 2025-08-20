'use client'
import Layout from '@/src/components/layout/Layout';
import { ReasonsCard } from '@/src/components/sections/ReasonsCard';
import { StepsSection } from '@/src/components/sections/StepsSection';
import { FormField } from '@/src/components/ui/form-field';
import { Label } from '@/src/components/ui/label';
import { reasonsCard } from '@/src/data';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { z } from 'zod';


const partnersSchema = z.object({
    name: z.string()
        .min(4, "O nome é obrigatório e deve ter pelo menos 4 caracteres."),
    email: z.string()
        .email("Digite um e-mail válido."),
    phone: z.string()
        .min(10, "O telefone é obrigatório e deve ter pelo menos 10 dígitos.")
        .refine((value) => /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(value), {
            message: "Número de telefone inválido. Use o formato (99) 99999-9999.",
        }),
    segment: z.string()
        .min(2, 'Precisamos saber o segmento da sua empresa.'),
    proposal: z.enum(
        ["Divulgação de marca", "Troca de Serviços", "Patrocínio", "Outro",],
        { errorMap: () => ({ message: "Selecione o tipo de proposta da sua empresa." }) }
    ),
    publicInfo: z.string()
        .min(2, 'Precisamos saber o seu público-alvo.'),
    budgeting: z.string()
        .min(2, 'O orçamento ou contrapartida é obrigatório.'),
    more: z.string()
        .min(10, 'Não seja tímido, conte mais sobre você (mínimo 10 caracteres).'),
});

type PartnersData = z.infer<typeof partnersSchema>

const PartnersPage = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const methods = useForm<PartnersData>({
        resolver: zodResolver(partnersSchema),
    });
    const { handleSubmit, reset, register, formState: { errors } } = methods;

    async function onSubmit(data: PartnersData) {
        setLoading(true)
        await fetch("/api/emails/partnership", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)

        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Erro na requisição")
                }
                console.log('deu certo');

            })
            .catch(() => {
                console.log('deu errado');

            })
            .finally(() => setLoading((prev) => !prev))
        reset()
    }

    return (
        <Layout backgroundHeader="bg-secondary-theme">
            <main>
                <section className="bg-secondary-theme text-white text-center py-20 px-4 mt-20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-down">
                        Junte-se a Nós. Cresça Conosco.
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up">
                        Expanda seus negócios e alcance novos clientes tornando-se um parceiro oficial do <span className='text-surface'>BotDoSenpai</span>.
                    </p>
                    <Link
                        href="#partner-form"
                        className="bg-white text-secondary-theme font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
                    >
                        Quero ser um Parceiro
                        <ArrowRight className="inline-block ml-2" size={20} />
                    </Link>
                </section>

                <section id="benefits" className="py-20 bg-surface-card px-4">
                    <div className="max-w-6xl mx-auto text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Por que ser nosso Parceiro?</h1>
                        <h2 className="text-gray-600 mb-12 max-w-2xl mx-auto">
                            Oferecemos um ecossistema completo para você prosperar e agregar mais valor aos seus clientes.
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {reasonsCard.map((card, index) => (
                                <ReasonsCard
                                    key={index}
                                    icon={card.icon}
                                    title={card.title}
                                    text={card.text}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                <StepsSection />

                <section id="partner-form" className="py-20 bg-surface-card px-4">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">Pronto para Começar?</h2>
                        <FormProvider {...methods}>
                            <form onSubmit={handleSubmit(onSubmit)} className="bg-content-inverse p-8 rounded-lg space-y-6">
                                <FormField label='Nome completo/nome da empresa' name='name' direction='col' />
                                <FormField label='Email' name='email' type='email' direction='col' />
                                <FormField label='Telefone' name='phone' direction='col' maxLength={15} />
                                <FormField label='Segmento' name='segment' direction='col' />
                                <div className='space-y-2'>
                                    <Label>Proposta</Label>
                                    <select
                                        {...register("proposal")}
                                        className="border rounded-lg p-2 w-full"
                                        name='proposal'
                                    >
                                        <option value="" disabled>
                                            Selecione uma opção
                                        </option>
                                        <option value="Divulgação de marca">Divulgação de marca</option>
                                        <option value="Troca de Serviços">Troca de Serviços</option>
                                        <option value="Patrocínio">Patrocínio</option>
                                        <option value="Outro">Outro</option>
                                    </select>
                                    {errors.proposal && (
                                        <p className="text-red-500 text-sm">{errors.proposal.message}</p>
                                    )}
                                </div>
                                <FormField label='Qual público você deseja atingir?' name='publicInfo' direction='col' />
                                <FormField label='Qual tipo de orçamento ou contrapartida você pensa em oferecer?' name='budgeting' direction='col' />
                                <FormField label='Conte mais sobre sua ideia' name='more' type='textarea' direction='col' />

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-primary-theme text-white font-bold py-3 px-6 rounded-md text-lg hover:bg-opacity-90 transition-colors flex items-center justify-center"
                                >
                                    {loading ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                                            </svg>
                                            Enviando...
                                        </span>
                                    ) : (
                                        "Enviar Cadastro"
                                    )}
                                </button>
                            </form>
                        </FormProvider>
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default PartnersPage;