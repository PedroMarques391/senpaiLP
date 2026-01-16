"use client";

import Layout from "@/src/components/layout/Layout";
import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/src/components/ui/dialog";
import FormDialog from "@/src/components/ui/form-diolog";
import { FormField } from "@/src/components/ui/form-field";
import { useEmailForm } from "@/src/hooks/useEmailForm";
import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FormProvider } from "react-hook-form";
import senpai from "../../../../public/images/thanks/thanks.png";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const buttonVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 200 } },
  hover: { scale: 1.05, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" },
};

const ThanksPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const methods = useEmailForm("partial");
  const t = useTranslations();

  return (
    <Layout backgroundHeader="bg-secondary-theme">
      <main className="min-h-screen flex items-center justify-center p-8 ">
        <motion.section
          className="w-full max-w-6xl mx-auto rounded-3xl overflow-hidden "
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16 p-8 md:p-16 ">
            <motion.article className="flex justify-center md:justify-end" variants={itemVariants}>
              <Image
                src={senpai}
                alt="Uma imagem fofa de agradecimento"
                width={400}
                height={400}
                priority
                className="rounded-full object-cover aspect-square shadow-lg"
              />
            </motion.article>

            <motion.article
              className="text-center md:text-left text-gray-900 "
              variants={containerVariants}
            >
              <motion.h1
                className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight"
                variants={itemVariants}
              >
                {t("thanks.welcomeMessage")}
              </motion.h1>

              <motion.p
                className="text-base md:text-xl text-content-secondary mb-6 leading-relaxed"
                variants={itemVariants}
              >
                {t("thanks.welcomeSubtitle")}
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <motion.div variants={buttonVariants}>
                  <Button
                    onClick={() => setIsOpen(true)}
                    className="bg-content-secondary text-content-inverse font-semibold p-4 rounded-xl shadow-md transition-all w-full sm:w-auto"
                  >
                    {t("thanks.finish")}
                  </Button>
                </motion.div>
                <motion.div variants={buttonVariants}>
                  <Button
                    asChild
                    variant="outline"
                    className="bg-transparent border border-content-secondary text-content-primary font-semibold p-4 rounded-xl  transition-all w-full sm:w-auto hover:bg-content-primary hover:text-content-inverse"
                  >
                    <Link href="/">{t("thanks.backToHome")}</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.article>
          </div>
        </motion.section>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{t("thanks.almostThere")}</DialogTitle>
              <DialogDescription>{t("thanks.formInstructions")}</DialogDescription>
            </DialogHeader>
            <FormProvider {...methods}>
              <FormDialog subject="Ativando benefícios">
                <FormField label={t("components.dialog.supportForm.label.name")} name="name" />

                <FormField label="E-mail" name="email" type="email" />

                <FormField
                  label={t("components.dialog.supportForm.label.phone")}
                  name="phone"
                  maxLength={15}
                />
              </FormDialog>
            </FormProvider>
          </DialogContent>
        </Dialog>
      </main>
    </Layout>
  );
};

export default ThanksPage;
