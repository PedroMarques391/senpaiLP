import Image from "next/image";
import senpai from "@/public/images/senpai/IconSenpai.png";
import Link from "next/link";
import { useLocale } from "next-intl";

const Logo = (): React.JSX.Element => {
    const locale = useLocale();
    return (
        <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} href={`/${locale}`} className="flex  justify-center items-center gap-2  ml-2">
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
    );
};

export default Logo;
