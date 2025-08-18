
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/src/components/ui/accordion"
import { IFaq } from "@/src/types"
import React from 'react'

interface IFaqProps {
    faq: IFaq[]
}

export const Faq = ({ faq }: IFaqProps): React.JSX.Element => {
    return (
        <Accordion
            type="single" collapsible className="w-full max-w-4xl mx-auto mb-10 px-3">
            {faq.map((faqItem, key) => (
                <AccordionItem value={`item-${key}`} key={key} className="border-b border-[#fb6480]">
                    <AccordionTrigger className="text-xl ">{faqItem.question}</AccordionTrigger>
                    <AccordionContent className="text-lg ">
                        {faqItem.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
