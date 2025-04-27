"use client"

import Layout from '@/src/components/layout/Layout'
import senpaiAbout from "@/public/images/about/senpaiInRoom.webp"
import senpaiAbout2 from "@/public/images/about/senpaiWithFriend.webp"
import senpaiAbout3 from "@/public/images/about/senpai.webp"
import AlternatingSection from '@/src/components/sections/AlternatingSection'
import wallpaper from '@/public/images/about/wallpaper.webp'

import Team from '@/src/components/sections/Team'
import Image from 'next/image'
import { MdKeyboardDoubleArrowDown } from 'react-icons/md'
import { team } from '@/src/data'

const AboutPage = () => {
    return (
        <Layout
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
                        title='Reconhecimento'
                    >
                        Desde 2020, o Bot do Senpai vem conquistando seu espaço nas redes sociais e na mente dos usuários. Nosso número foi compartilhado organicamente milhares de vezes, com destaque em postagens virais no Twitter que ultrapassaram milhões de visualizações, inclusive por usuários de diferentes países.
                    </AlternatingSection>
                    <AlternatingSection
                        imageGridAlign='right'
                        image={senpaiAbout2}
                        title='Como fazemos?'
                    >
                        Transformamos mensagens em momentos únicos. Combinamos inteligência artificial e linguagem natural para garantir que cada pessoa se sinta ouvida, compreendida e acolhida — tudo isso direto no WhatsApp.
                    </AlternatingSection>
                    <AlternatingSection
                        imageGridAlign='left'
                        image={senpaiAbout3}
                        title='O que nos torna diferentes?'
                    >
                        Cada detalhe da Senpai foi criado a partir de interações reais — observamos o que aproxima, o que confunde, o que realmente faz a diferença.
                        Desenvolvemos uma IA que escuta, compreende e responde com empatia e clareza, porque acreditamos que conversar bem é transformar experiências.
                        No fim das contas, nosso propósito é simples: tornar os diálogos mais humanos, exatamente onde eles acontecem de forma natural — no seu WhatsApp.
                    </AlternatingSection>
                </section>
                <section>
                    <div className=" text-center py-10 bg-gray-200">
                        <h1 className="text-3xl font-bold mb-6">Conheça nosso time</h1>
                        <p className="text-lg text-gray-600 mb-6">
                            Um time dedicado a transformar interações em experiências incríveis.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl mx-auto md:px-5 overflow-hidden">
                            {team.map((teamMember, index) => (
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