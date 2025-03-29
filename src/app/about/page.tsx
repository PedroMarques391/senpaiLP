import Layout from '@/components/template/Layout'
import senpaiAbout from "../../../public/images/senpai/IconSenpai.png"
import senpaiAbout2 from "../../../public/images/why.jpeg"
import senpaiAbout3 from "../../../public/images/face.jpeg"


import AlternatingSection from '@/components/AlternatingSection'

const AboutPage = () => {
    return (
        <Layout
            hero={false}
            backgroundColor='bg-gray-100'
            backgroundHeader='bg-black'
            container={false}
        >
            <main className='w-full min-h-screen'>
                <AlternatingSection
                    imageGridAlign='left'
                    image={senpaiAbout}
                    title='No que acreditamos?'
                >
                    Acreditamos no poder da conversa. Acreditamos que a tecnologia deve ser humana, acessível e presente — exatamente onde as pessoas estão.
                    Por isso, unimos inteligência artificial, automação e atendimento personalizado em um só lugar: no WhatsApp, o canal mais direto e natural do dia a dia.
                    Nossa missão é transformar interações em experiências inteligentes, rápidas e eficientes.
                    Porque quando tecnologia fala a mesma língua das pessoas, tudo flui melhor.
                </AlternatingSection>
                <AlternatingSection
                    imageGridAlign='right'
                    image={senpaiAbout2}
                    title='Por que fazemos o que fazemos?'
                >
                    Porque acreditamos que todo mundo merece ser ouvido com atenção, clareza e carinho — direto no WhatsApp, onde a conversa é só entre nós.
                </AlternatingSection>
                <AlternatingSection
                    imageGridAlign='left'
                    image={senpaiAbout3}
                    title='Nossa abordagem'
                >
                    Somos pessoas que acreditam no poder de uma boa conversa. Cada detalhe da senpai foi pensado com base em interações reais: o que ajuda, o que confunde, o que aproxima. Desenvolvemos uma IA que entende, respeita e responde com clareza — porque acreditamos que conversar bem é transformar experiências. No fim das contas, nosso foco é simples: criar diálogos mais humanos, no lugar onde eles realmente acontecem — no seu WhatsApp.
                </AlternatingSection>
            </main >
        </Layout >
    )
}

export default AboutPage