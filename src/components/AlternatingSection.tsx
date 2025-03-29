import Image, { StaticImageData } from "next/image"


interface IAlternatingSectionProps {
    image: StaticImageData
    title: string
    children: React.ReactNode
    imageGridAlign: "left" | "right"
}

const AlternatingSection = ({ image, title, children, imageGridAlign }: IAlternatingSectionProps): React.JSX.Element => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2  place-content-center place-items-center">
            <div className={`flex justify-center items-center bg-black w-full h-full max-h-[500px] min-h-[400px] ${imageGridAlign === "left" ? "order-2 md:order-1" : "order-1 md:order-2"}`}>
                <Image
                    alt={`Imagem ilustrativa da seção: ${title}`}
                    src={image}
                    height={700}
                    width={700}
                    priority
                    className='object-cover xl:object-contain w-full h-full'
                />
            </div>
            <div className={`w-full flex flex-col md:flex-row justify-start items-center p-7 h-full ${imageGridAlign === "left" ? "order-2" : "order-1"}`}>
                <div className='w-full lg:max-w-4/5 '>
                    <h1 className='text-xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-4 w-full text-left '>
                        {title}
                    </h1>
                    <p className='text-base lg:text-base xl:text-lg text-gray-600 leading-relaxed text-justify break-words hyphens-auto'>
                        {children}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AlternatingSection