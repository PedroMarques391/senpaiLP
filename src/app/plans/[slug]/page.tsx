
import Layout from '@/src/components/layout/Layout';
import { services } from '@/src/data'
import { notFound } from 'next/navigation';
import React from 'react'

import PaymentButton from '@/src/components/shared/PaymentButton';



export async function generateStaticParams(): Promise<{ slug: string }[]> {
    return services.map((service) => ({
        slug: service.url
    }))
}

export default async function Page({
    params,
}: { params: Promise<{ slug: string }> }): Promise<React.JSX.Element> {
    const { slug } = await params;

    const service = services.find(service => service.url === slug) ?? notFound();


    return (
        <Layout
            backgroundColor='bg-gray-100'
            backgroundHeader='bg-black'
            load={false}
        >
            <main className='w-full min-h-screen mt-22'>
                <section className="w-full max-w-3xl mx-auto flex flex-col items-center text- py-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        {service.service}
                    </h1>
                    <p className="text-2xl md:text-3xl font-semibold text-green-600 mb-6 font-sans">
                        R$ {service.value} / mês
                    </p>
                    <p className="text-base md:text-lg text-gray-600 mb-8">
                        {service.description}
                    </p>
                    <p>form</p>

                    <PaymentButton
                        title={service.service}
                        price={service.value}
                        text={service.textButton}
                    />
                </section>

            </main>
        </Layout>
    );
}