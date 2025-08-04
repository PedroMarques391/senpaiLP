"use client"

import Layout from '@/src/components/layout/Layout'
const ThanksPage = () => {
    return (
        <Layout
            backgroundColor='bg-gray-100'
            backgroundHeader='bg-black'
            container={false}
        >
            <main className='w-full min-h-screen'>
                <div className="flex flex-col items-center justify-center w-full h-full min-h-screen">
                    <div>Pagina de agradecimento</div>
                </div>
            </main >
        </Layout >
    )
}

export default ThanksPage