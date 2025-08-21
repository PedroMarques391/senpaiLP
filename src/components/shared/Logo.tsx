import Image from "next/image"
import senpai from "@/public/images/senpai/IconSenpai.png"
import Link from "next/link"

const Logo = (): React.JSX.Element => {
    return (
        <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} href="/" className="flex md:flex-col lg:flex-row justify-center items-center gap-2 md:gap-0 lg:gap-2 ml-2">
            <Image
                src={senpai}
                alt="Foto da Senpai - Logo"
                priority
                width={60}
                height={60}
                className="bg-gradient-to-r from-fuchsia-300 via-purple-300 to-slate-50 rounded-full"
            />
            <p className="lg:text-xl font-semibold text-content-inverse md:-mt-1 lg:mt-0">Senpai</p>
        </Link>
    )
}

export default Logo
