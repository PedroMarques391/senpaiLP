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
            <div className={`flex justify-center items-center bg-black w-full h-full ${imageGridAlign === "left" ? "order-2 md:order-1" : "order-1 md:order-2"}`}>
                <Image
                    alt='Foto da senpai na página about.'
                    src={image}
                    height={800}
                    width={800}
                    priority
                    className='bg-contain bg-no-repeat max-w-full h-auto'
                />
            </div>
            <div className={`w-full flex flex-col md:flex-row justify-center items-center p-4 h-full ${imageGridAlign === "left" ? "order-2" : "order-1"}`}>
                <div className='w-full lg:max-w-4/5 text-center md:text-left'>
                    <h1 className='text-3xl lg:text-4xl font-bold text-gray-800 mb-4 w-full text-center'>
                        {title}
                    </h1>
                    <p className='text-base lg:text-lg text-gray-600 leading-relaxed text-justify break-words hyphens-auto'>
                        {children}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default AlternatingSection