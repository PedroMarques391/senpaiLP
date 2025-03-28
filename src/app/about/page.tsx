import Layout from '@/components/template/Layout'
import React from 'react'

const AboutPage = () => {
    return (
        <Layout
            hero={false}
            backgroundColor='bg-gray-100'
            backgroundHeader='bg-black'
        >
            <div className="flex justify-center items-center h-screen">
                Site em produção
            </div>
        </Layout>
    )
}

export default AboutPage