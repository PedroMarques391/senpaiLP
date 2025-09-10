import { useEmailForm } from "@/src/hooks/useEmailForm";
import { CheckCircle, Copy } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { FormProvider } from "react-hook-form";
import QRCode from "react-qrcode-logo";
import { Button } from "../ui/button";
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import FormDialog from "../ui/form-diolog";
import { FormField } from "../ui/form-field";
import { Input } from "../ui/input";

interface ModalStepsProps {
  onClose: () => void;
  handleNextStep: () => void;
}

interface PaymentProps extends ModalStepsProps {
  countdown: number;
  pix: string;
}

const PROMO = ({ handleNextStep, onClose }: ModalStepsProps): React.JSX.Element => {
  const t = useTranslations("components.modalSteps.promo");
  return (
    <>
      <DialogHeader className="flex flex-col items-center text-center">
        <DialogTitle className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-700">
          {t("title")}
        </DialogTitle>

        <DialogDescription className="mt-2 text-primary-theme text-lg font-medium">
          {t.rich("subtitle", {
            bold: (chunks) => <b>{chunks}</b>,
            deleted: (chunks) => <del>{chunks}</del>,
            inserted: (chunks) => <ins>{chunks}</ins>,
          })}
        </DialogDescription>

        <div className="mt-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-semibold bg-white/30 backdrop-blur-sm shadow">
          {t("exclusive")}
        </div>
      </DialogHeader>

      <section className="mt-6 flex flex-col items-center">
        <div className="relative w-48 h-48 rounded-full p-1 ">
          <Image
            src="/images/senpai/senpai.webp"
            alt="Senpai"
            width={300}
            height={300}
            className="rounded-full object-cover w-full h-full"
          />
        </div>

        <div className="mt-6 w-full flex flex-col gap-3">
          <Button
            onClick={handleNextStep}
            className="w-full px-6 py-4 rounded-full text-lg font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 text-white  focus-visible:ring-0 cursor-pointer hover:from-purple-600 hover:to-pink-500 transition-colors duration-500"
          >
            {t("iWant")}
          </Button>

          <div className="grid grid-cols-8 gap-2 justify-center items-center">
            <div className="rounded-md p-3  font-semibold text-sm col-span-2 bg-white/80">
              SENPAI10
            </div>
            <div className="text-sm text-muted-foreground  w-full col-span-3 rounded-md text-center">
              {t("clickIn")}
            </div>
            <button
              onClick={onClose}
              className="text-sm px-3 py-2 rounded-md underline underline-offset-2 pointer-events-auto hover:text-muted-foreground col-span-3"
            >
              {t("noThanks")}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

const FORM = ({ handleNextStep }: Omit<ModalStepsProps, "onClose">): React.JSX.Element => {
  const t = useTranslations("components.modalSteps.form");
  const methods = useEmailForm("partial");
  return (
    <>
      <DialogHeader className="flex flex-col items-center text-center">
        <DialogTitle className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-700">
          {t("title")}
        </DialogTitle>

        <DialogDescription className="mt-2  text-primary-theme  font-medium ">
          {t("subtitle")}
        </DialogDescription>
      </DialogHeader>

      <FormProvider {...methods}>
        <FormDialog buttonText={t("generatePix")} onEmailSent={handleNextStep}>
          <FormField
            label={t("labels.name")}
            name="name"
            className="bg-white border-pink-200 border-2 text-gray-800 placeholder-gray-400 focus-visible:border-primary-theme focus-visible:ring-primary-theme/50"
          />

          <FormField
            label="E-mail"
            name="email"
            type="email"
            className="bg-white border-pink-200 border-2 text-gray-800 placeholder-gray-400 focus-visible:border-primary-theme focus-visible:ring-primary-theme/50"
          />

          <FormField
            label={t("labels.phone")}
            name="phone"
            maxLength={15}
            className="bg-white border-pink-200 border-2 text-gray-800 placeholder-gray-400 focus-visible:border-primary-theme focus-visible:ring-primary-theme/50"
          />
        </FormDialog>
      </FormProvider>
    </>
  );
};

const PAYMENT = ({
  handleNextStep,
  pix,
  countdown,
}: Omit<PaymentProps, "onClose">): React.JSX.Element => {
  const [copied, setCopied] = useState(false);
  const t = useTranslations("components.modalSteps.payment");
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  async function handleCopy() {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(pix);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      console.error("[handleCopy] Failed to copy text");
    }
  }
  return (
    <section className="flex flex-col items-center justify-center gap-y-5">
      <DialogHeader>
        <DialogTitle className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-700">
          {t("title")}
        </DialogTitle>

        <DialogDescription className="mt-2 text-primary-theme font-medium">
          {t("subtitle")}
        </DialogDescription>
      </DialogHeader>
      <div className="bg-white p-4 rounded-lg border border-[#ff80ab]">
        <QRCode
          value={pix}
          size={240}
          fgColor="#ff80ab"
          bgColor="#fff0f6"
          eyeColor={[
            { outer: "#ff4081", inner: "#ec407a" },
            { outer: "#ff4081", inner: "#ec407a" },
            { outer: "#ff4081", inner: "#ec407a" },
          ]}
          qrStyle="dots"
          logoImage="/images/senpai/senpai.webp"
          logoWidth={60}
          logoHeight={60}
          logoOpacity={1}
          eyeRadius={[
            { outer: [10, 10, 0, 10], inner: [0, 5, 5, 5] },
            { outer: [10, 10, 10, 0], inner: [5, 0, 5, 5] },
            { outer: [0, 10, 10, 10], inner: [5, 5, 0, 5] },
          ]}
        />
      </div>
      <span className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white">
        <span className="animate-pulse ">⏳</span>
        {t("time")} {minutes}:{seconds.toString().padStart(2, "0")}
      </span>
      <div className="w-full relative">
        <Input
          readOnly
          value={pix ? pix : "Gerando..."}
          className="pr-12 bg-white border-pink-200 border-2 text-gray-800 focus-visible:border-primary-theme focus-visible:ring-[0px]"
          placeholder="PIX Copia e Cola"
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 cursor-copy"
        >
          {copied ? (
            <CheckCircle className="h-5 w-5 text-green-500" />
          ) : (
            <Copy className="h-5 w-5" />
          )}
        </Button>
      </div>
      <Button
        onClick={handleNextStep}
        className="w-full px-6 py-4 rounded-full text-lg font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 text-white  transition-transform"
      >
        {t("pay")}
      </Button>
    </section>
  );
};

const THANKYOU = ({ onClose }: Omit<ModalStepsProps, "handleNextStep">): React.JSX.Element => {
  const t = useTranslations("components.modalSteps.thanksYou");
  return (
    <>
      <DialogHeader>
        <DialogTitle className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-700">
          {t("title")}
        </DialogTitle>

        <section className="mt-3 text-primary-theme font-medium space-y-3">
          {t.rich("subtitle", {
            bold: (chunks) => <b>{chunks}</b>,
          })}
          <div className="flex flex-col  gap-2">
            <b>{t("acess")}</b>
            <ul className="list-disc list-inside text-left">
              <li>{t("unlimitedStickers")}</li>
              <li>{t("unlimitedChat")}</li>
            </ul>
          </div>
          <p className="text-pink-600 font-semibold mt-3">{t("thanks")}</p>
        </section>
      </DialogHeader>
      <Button
        onClick={onClose}
        className="w-full px-6 py-4 rounded-full text-lg font-extrabold bg-gradient-to-r from-pink-500 to-purple-600 text-white  transition-transform"
      >
        {t("finish")}
      </Button>
    </>
  );
};

export const ModalSteps = {
  PROMO,
  FORM,
  PAYMENT,
  THANKYOU,
};
