"use client";

import Layout from '@/src/components/layout/Layout';
// import { services } from '@/src/data';
import { useRouter } from 'next/navigation';
import React from 'react';

// export async function generateStaticParams(): Promise<{ slug: string }[]> {
//     'server'
//     return services.map((service) => ({
//         slug: service.url
//     }));gi
// }

export default function Page(): React.JSX.Element {
    // TODO
    // develop dynamic routes for payment
    // const { slug } = params; // Exemplo de como acessar o slug
    // const service = services.find(service => service.url === slug);

    const router = useRouter();

    return (
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
                </div>
            </main>

        </Layout>
    );
}