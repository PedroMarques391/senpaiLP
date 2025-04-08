import { IFaq } from '@/src/data/utils'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/src/components/ui/accordion"
import React from 'react'

interface IFaqProps {
    faq: IFaq[]
}

export const Faq = ({ faq }: IFaqProps): React.JSX.Element => {
    return (
        <Accordion
            type="single" collapsible className="w-full max-w-4xl mx-auto mb-10 px-3">
            {faq.map((faqItem, key) => (
                <AccordionItem value={`item-${key}`} key={key} >
                    <AccordionTrigger className="text-xl ">{faqItem.question}</AccordionTrigger>
                    <AccordionContent className="text-lg ">
                        {faqItem.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
