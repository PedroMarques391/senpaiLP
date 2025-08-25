'use client'
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Layout from '@/src/components/layout/Layout';



export default function PlansPage() {
    const router = useRouter();

    const containerVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100 },
        },
    };

    return (
        <Layout
            container={false}
        >
            <main className=" relative w-full  flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/wallpaper.png"
                        alt="Senpai Wallpaper"
                        fill
                        className="object-cover opacity-80"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
                </div>

                <motion.div
                    className="flex flex-col items-center justify-center text-center text-white z-20 h-screen"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >

                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-3"
                        variants={itemVariants}
                    >
                        A Senpai está cuidando disso 💖
                    </motion.h1>

                    <motion.p
                        className="text-lg text-gray-200 max-w-md"
                        variants={itemVariants}
                    >
                        Estamos preparando algo especial para você. Volte em breve!
                    </motion.p>

                    <motion.button
                        className="mt-8 px-8 py-3 bg-primary-theme text-white font-semibold rounded-lg  hover:bg-primary-theme/60 transition-colors duration-300"
                        onClick={() => router.push('/')}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Voltar para a Home
                    </motion.button>
                </motion.div>
            </main>
        </Layout>
    );
}
