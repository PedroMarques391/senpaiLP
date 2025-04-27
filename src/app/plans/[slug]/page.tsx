import Layout from '@/src/components/layout/Layout';
import { services } from '@/src/data'
import { notFound } from 'next/navigation';
import React from 'react'


export async function generateStaticParams(): Promise<{
    slug: string;
}[]> {
    return services.map((service) => ({
        slug: service.url
    }))
}

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>

}): Promise<React.JSX.Element> {
    const { slug } = await params;

    const service = services.find(service => service.url === slug) ?? notFound();

    console.log(service)

    return (
        <Layout
            backgroundColor='bg-gray-100'
            backgroundHeader='bg-black'
            load={false}
        >
            <main className='w-full min-h-screen'>
                <p>ou</p>
            </main>
        </Layout>
    );
}