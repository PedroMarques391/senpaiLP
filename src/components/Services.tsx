import React from 'react'
import { Button } from './ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'


export interface IServicesInterface {
    service: string
    value: string
    description: string
    characteristics: string[]
    textButton: "Teste grátis" | "Assine Agora"
}

const Services = ({ service, value, description, characteristics, textButton }: IServicesInterface): React.JSX.Element => {
    return (
        <div className="max-w-[400px] bg-white rounded-2xl shadow-lg p-6 border border-gray-300 flex flex-col h-full">
            <div className=" h-40">
                <h1 className="text-lg font-bold text-gray-900 uppercase">{service}</h1>
                <p className="text-4xl font-extrabold text-gray-900 mt-2">
                    R$ {value} <span className="text-lg font-medium">/ mês</span>
                </p>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>

            <ul className="mt-4 space-y-3 text-gray-700 flex-grow">
                {characteristics.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="text-green-500 w-5 h-5" />
                        {item}
                    </li>
                ))}
            </ul>

            <Button className="w-full text-lg py-6 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:opacity-90 transition-all mt-7">
                {textButton} <ArrowRight size={34} />
            </Button>
        </div>

    )
}

export default Services