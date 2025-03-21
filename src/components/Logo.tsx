import Image from "next/image"
import senpai from "../../public/images/senpaiLogo.webp"

const Logo = (): React.JSX.Element => {
    return (
        <div className="flex justify-center items-center gap-2">
            <Image
                src={senpai}
                alt="Foto da Senpai/Logo"
                priority
                width={60}
                height={60}
                className="bg-gradient-to-r from-fuchsia-300 via-purple-300 to-slate-50 rounded-full"
            />

        </div>
    )
}

export default Logo