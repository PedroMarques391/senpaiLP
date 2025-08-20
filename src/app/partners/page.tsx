'use client'
import Layout from '@/src/components/layout/Layout';
import { FormField } from '@/src/components/ui/form-field';
import { Label } from '@/src/components/ui/label';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRight, BarChart, DollarSign, Gem } from 'lucide-react';
import Link from 'next/link';
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
        ["brand", "service", "sponsor", "other",],
        { errorMap: () => ({ message: "Selecione o tipo de proposta da sua empresa." }) }
    ),
    public: z.string()
        .min(2, 'Precisamos saber o seu público-alvo.'),
    budgeting: z.string()
        .min(2, 'O orçamento ou contrapartida é obrigatório.'),
    more: z.string()
        .min(10, 'Não seja tímido, conte mais sobre você (mínimo 10 caracteres).'),
});

type PartnersData = z.infer<typeof partnersSchema>

const PartnersPage = () => {
    const methods = useForm<PartnersData>({
        resolver: zodResolver(partnersSchema),
    });

    const { handleSubmit, reset, register, formState: { errors } } = methods;

    function onSubmit(data: PartnersData) {
        console.log("Dados enviados:", data);
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Por que ser nosso Parceiro?</h2>
                        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                            Oferecemos um ecossistema completo para você prosperar e agregar mais valor aos seus clientes.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <DollarSign className="h-12 w-12 mx-auto text-primary-theme mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Aumente sua Receita</h3>
                                <p className="text-gray-600">
                                    Ganhe comissões atrativas por cada cliente indicado ou venda realizada através da nossa parceria.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <BarChart className="h-12 w-12 mx-auto text-primary-theme mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Acesso a Recursos</h3>
                                <p className="text-gray-600">
                                    Receba materiais de marketing, treinamento exclusivo e suporte dedicado para acelerar seu sucesso.
                                </p>
                            </div>
                            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <Gem className="h-12 w-12 mx-auto text-primary-theme mb-4" />
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Agregue Valor</h3>
                                <p className="text-gray-600">
                                    Ofereça nosso [Produto/Serviço Principal] aos seus clientes e fortaleça seu portfólio com uma solução líder de mercado.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">O Processo é Simples</h2>
                        <div className="relative">
                            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-secondary-theme -translate-y-1/2"></div>
                            <div className="relative flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
                                <div className="flex flex-col items-center text-center w-full md:w-1/3 px-4">
                                    <div className="bg-primary-theme text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4 z-10">1</div>
                                    <h3 className="text-xl font-semibold mb-2">Cadastro</h3>
                                    <p className="text-gray-600">Preencha o formulário de interesse abaixo. É rápido e fácil.</p>
                                </div>
                                <div className="flex flex-col items-center text-center w-full md:w-1/3 px-4">
                                    <div className="bg-primary-theme text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4 z-10">2</div>
                                    <h3 className="text-xl font-semibold mb-2">Análise</h3>
                                    <p className="text-gray-600">Nossa equipe entrará em contato para entender suas necessidades.</p>
                                </div>
                                <div className="flex flex-col items-center text-center w-full md:w-1/3 px-4">
                                    <div className="bg-primary-theme text-white rounded-full h-16 w-16 flex items-center justify-center text-2xl font-bold mb-4 z-10">3</div>
                                    <h3 className="text-xl font-semibold mb-2">Parceria</h3>
                                    <p className="text-gray-600">Após a aprovação, você recebe o acesso e inicia a parceria!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

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
                                        <option value="brand">Divulgação de marca</option>
                                        <option value="service">Troca de Serviços</option>
                                        <option value="sponsor">Patrocínio</option>
                                        <option value="Other">Outro</option>
                                    </select>
                                    {errors.proposal && (
                                        <p className="text-red-500 text-sm">{errors.proposal.message}</p>
                                    )}
                                </div>
                                <FormField label='Qual público você deseja atingir?' name='public' direction='col' />
                                <FormField label='Qual tipo de orçamento ou contrapartida você pensa em oferecer?' name='budgeting' direction='col' />
                                <FormField label='Conte mais sobre sua ideia' name='more' type='textarea' direction='col' />

                                <button
                                    type="submit"
                                    className="w-full bg-primary-theme text-white font-bold py-3 px-6 rounded-md text-lg hover:bg-opacity-90 transition-colors"
                                >
                                    Enviar Cadastro
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