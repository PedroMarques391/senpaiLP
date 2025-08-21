'use client';

import React, { use, useState } from 'react';
import { notFound } from 'next/navigation';
import { CheckCircle, ShieldCheck } from 'lucide-react';

import Layout from '@/src/components/layout/Layout';
import { services } from '@/src/data';
import { Dialog, DialogContent, DialogTrigger } from '@/src/components/ui/dialog';
import { Button } from '@/src/components/ui/button';
import { PaymentFlow } from '@/src/components/ui/payment-flow';

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params)
    const service = services.find((s) => s.url === slug);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    if (!service) {
        return notFound()
    }

    return (
<<<<<<< HEAD
        <Layout backgroundColor="bg-slate-50" backgroundHeader="bg-black" load={false}>
            <main className="w-full min-h-screen flex items-center justify-center p-4 antialiased">
                <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full border border-slate-200/80 overflow-hidden">
                    <div className="h-2 w-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>

                    <div className="p-8">
                        <div className="text-center mb-6">
                            <h1 className="text-4xl font-bold text-slate-800">
                                Plano{' '}
                                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                                    {service.service}
                                </span>
                            </h1>
                            <p className="text-slate-500 mt-3 text-base">{service.description}</p>
                        </div>

                        <div className="bg-slate-50/70 rounded-lg p-6 my-8 text-center">
                            <span className="text-5xl font-bold text-slate-900 tracking-tight">
                                R$ {service.value}
                            </span>
                            <span className="text-xl font-medium text-slate-500">/mês</span>
                        </div>

                        <div>
                            <h2 className="text-sm font-semibold tracking-wide text-slate-600 uppercase mb-4">
                                O que está incluso:
                            </h2>
                            <ul className="space-y-4">
                                {service.characteristics.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-10">
                            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                                <DialogTrigger asChild>
                                    <Button
                                        size="lg"
                                        className="w-full text-lg font-bold h-14
                               bg-gradient-to-r from-blue-600 to-blue-500
                               hover:shadow-lg hover:shadow-blue-500/40 hover:-translate-y-1
                               transition-all duration-300 ease-in-out"
                                    >
                                        {service.textButton}
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-md">
                                    <PaymentFlow service={service} onClose={() => setIsModalOpen(false)} />
                                </DialogContent>
                            </Dialog>
                        </div>

                        <div className="flex items-center justify-center text-center mt-6">
                            <ShieldCheck className="h-4 w-4 text-slate-400 mr-2" />
                            <p className="text-xs text-slate-400">Pagamento 100% seguro.</p>
                        </div>
                    </div>
=======
        <Layout
            backgroundColor='bg-gray-100'
            backgroundHeader='bg-senpai-header'
            load={false}
        >

            <main className='w-full min-h-screen mt-22'>
                <div className="flex flex-col items-center justify-center h-[60vh]">
                    <p className="text-3xl font-semibold text-gray-800 mb-4 animate-pulse">
                        Construindo 🚧
                    </p>
                    <span className="text-lg text-gray-500">
                        Esta página está em desenvolvimento. Volte em breve!
                    </span>
                    <button
                        className="mt-8 px-6 py-2 bg-black text-content-inverse rounded hover:bg-gray-800 transition"
                        onClick={() => router.push('/')}
                    >
                        Voltar para Home
                    </button>
>>>>>>> main
                </div>
            </main>
        </Layout>
    );
}
