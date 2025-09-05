
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/src/components/ui/accordion";
import { faq } from "@/src/data";
import { useTranslations } from "next-intl";
import React from "react";

export const Faq = (): React.JSX.Element => {
    const t = useTranslations("components.faq");
    return (
        <Accordion
            type="single" collapsible className="w-full max-w-4xl mx-auto mb-10 px-3 ">
            {faq.map((faqItem, key) => (
                <AccordionItem value={`item-${key}`} key={key} className="border-b border-primary-theme">
                    <AccordionTrigger className="text-xl">{t(`${faqItem.question}`)}</AccordionTrigger>
                    <AccordionContent className="text-lg ">
                        {t(`${faqItem.answer}`)}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};
