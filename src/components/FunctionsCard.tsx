import Link from "next/link"
import { Button } from "./ui/button"
import { BsWhatsapp } from "react-icons/bs"
import Image from "next/image"

interface IFunctionsCardProps {
    imagePath: string
    title: string
    subtitle: string
    message: string
}

const FunctionsCard = ({ imagePath, title, subtitle, message }: IFunctionsCardProps): React.JSX.Element => {
    return (
        <div className="bg-gray-100 w-full p-6 flex flex-col gap-6 rounded-xl justify-start">
            <div className="mx-auto bg-black w-full text-center h-[400px]">
                <Image
                    src={imagePath}
                    alt={title}
                    width={400}
                    height={400}
                    priority
                    className="inline-block w-auto object-contain h-full"
                />
            </div>
            <h1 className="text-xl lg:text-2xl tracking-wider font-semibold">{title}</h1>
            <p className="text-xl text-gray-400">{subtitle}</p>
            <Link
                href={`https://wa.me/555497153068?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Link que leva para o número do bot."
            >
                <Button
                    variant="outline"
                    className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-all flex items-center gap-2"
                >
                    <BsWhatsapp className="text-xl" />
                    Fale com a Senpai
                </Button>
            </Link>
        </div>
    )
}

export default FunctionsCard