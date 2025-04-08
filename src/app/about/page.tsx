"use client"

import Layout from '@/components/template/Layout'
import senpaiAbout from "../../../public/images/about/senpaiInRoom.webp"
import senpaiAbout2 from "../../../public/images/about/senpaiWithFriend.webp"
import senpaiAbout3 from "../../../public/images/about/senpai.webp"
import AlternatingSection from '@/components/AlternatingSection'
import wallpaper from '../../../public/images/about/wallpaper.webp'

import Team from '@/components/Team'
import { teamMembers } from '@/data/utils'
import Image from 'next/image'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'

const AboutPage = () => {
    return (
        <Layout
            hero={false}
            backgroundColor='bg-gray-100'
            backgroundHeader='bg-none'
            container={false}
        >
            <main className='w-full min-h-screen'>
                <section className='w-full h-[700px] relative'>
                    <Image
                        src={wallpaper}
                        alt='Wallpaper'
                        fill
                        placeholder='blur'
                        className='w-full object-cover '
                    />

                    <button
                        onClick={() => window.scrollTo({ top: 600, behavior: "smooth" })}
                        className='absolute bottom-10 left-[50%] transform -translate-x-[50%] text-white text-3xl font-bold  px-6 py-3 rounded-lg animate-bounce cursor-pointer'>
                        <MdKeyboardDoubleArrowDown size={60} />
                    </button>

                </section>
                <section>
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
                </section>
                <section>
                    <div className=" text-center py-10 bg-gray-200">
                        <h1 className="text-3xl font-bold mb-6">Conheça nosso time</h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Um time dedicado a transformar interações em experiências incríveis.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto md:px-5 overflow-hidden">
                            {teamMembers.map((teamMember, index) => (
                                <Team
                                    key={index}
                                    image={teamMember.image}
                                    name={teamMember.name}
                                    jobTitle={teamMember.jobTitle}
                                    bio={teamMember.bio}
                                    links={teamMember.links}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main >
        </Layout >
    )
}

export default AboutPage