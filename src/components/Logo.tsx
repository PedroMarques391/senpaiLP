import Image from "next/image"
import senpai from "../../public/images/IconSenpai.png"

const Logo = (): React.JSX.Element => {
    return (
        <div className="flex md:flex-col lg:flex-row justify-center items-center gap-2 md:gap-0 lg:gap-2">
            <Image
                src={senpai}
                alt="Foto da Senpai - Logo"
                priority
                width={60}
                height={60}
                className="bg-gradient-to-r from-fuchsia-300 via-purple-300 to-slate-50 rounded-full"
            />
            <p className="lg:text-xl font-semibold text-white md:-mt-1 lg:mt-0">Senpai</p>

        </div >
    )
}

export default Logo