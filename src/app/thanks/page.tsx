'use client'

import Layout from '@/src/components/layout/Layout'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/src/components/ui/button'
import senpai from '../../../public/images/senpai/IconSenpai.png'
import { ChangeEvent, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/src/components/ui/dialog'
import { FormField } from '@/src/components/ui/form-field'
import { FormProvider } from 'react-hook-form'
import { insertMaskInPhone } from '@/src/utils'
import { useEmailForm } from '@/src/hooks/useEmailForm'
import FormDialog from '@/src/components/ui/form-diolog'

const ThanksPage = () => {
    const [isOpen, setIsOpen] = useState(false)

    const methods = useEmailForm()

    const { setValue, clearErrors, register, formState: { errors } } = methods


    function handleMask(e: ChangeEvent<HTMLInputElement>): void {
        const formattedPhone: string = insertMaskInPhone(e.target.value)
        setValue("phone", formattedPhone)
        clearErrors("phone")
    }



    return (
        <Layout backgroundColor="bg-white" backgroundHeader="bg-black" container={false}>
            <main className="w-full min-h-screen flex items-center justify-center">
                <section className="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full max-w-6xl mx-auto p-8 gap-12">

                    <motion.article
                        className="flex justify-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, type: 'spring', stiffness: 80 }}
                    >
                        <Image
                            src={senpai}
                            alt="Imagem fofa de agradecimento"
                            width={350}
                            height={350}
                            className="rounded-2xl"
                        />
                    </motion.article>

                    <motion.article
                        className="text-center md:text-left"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    >
                        <motion.h1
                            className="text-2xl md:text-3xl font-extrabold text-black mb-4"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                        >
                            Oooown, que felicidade! 🥹🖤
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-gray-800 mb-6 leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.7 }}
                        >
                            Só passando para dizer um ENORME OBRIGADA por assinar nosso plano! Você agora faz parte da nossa família, e isso nos deixa mega felizes! Esperamos que você aproveite cada benefício e, qualquer coisa, estamos aqui de braços abertos para te ajudar.
                        </motion.p>

                        <Button
                            onClick={() => setIsOpen(true)}
                            className="bg-black text-white font-semibold p-6 rounded-full shadow-md transition-all duration-300 w-full"
                        >
                            Finalizar
                        </Button>
                    </motion.article>
                </section>

                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Quase lá!</DialogTitle>
                            <DialogDescription>
                                Complete o formulário abaixo com seus dados para ativar seu acesso e aproveitar todos os benefícios.
                            </DialogDescription>
                        </DialogHeader>
                        <FormProvider {...methods}>
                            <FormDialog>
                                <FormField
                                    label="Nome"
                                    name="name"
                                    register={register}
                                    error={errors.name?.message}
                                />

                                <FormField
                                    label="E-mail"
                                    name="email"
                                    type="email"
                                    register={register}
                                    error={errors.email?.message}
                                />

                                <FormField
                                    label="Telefone"
                                    name="phone"
                                    register={register}
                                    error={errors.phone?.message}
                                    onChange={handleMask}
                                    maxLength={15}
                                />

                            </FormDialog>
                        </FormProvider>
                    </DialogContent>
                </Dialog>
            </main>
        </Layout>
    )
}

export default ThanksPage
