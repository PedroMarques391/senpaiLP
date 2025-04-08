import { ShieldCheck, Lock, ThumbsUp, Users, RefreshCw } from "lucide-react";
import { JSX } from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

type IconKey = "shield" | "lock" | "thumbs" | "users" | "refresh" | "instagram" | "github" | "linkedin"

export function renderIcon(icon: IconKey): React.JSX.Element {
    const iconMap: Record<IconKey, JSX.Element> = {
        shield: <ShieldCheck className="w-6 h-6 text-green-500" />,
        lock: <Lock className="w-6 h-6 text-blue-500" />,
        thumbs: <ThumbsUp className="w-6 h-6 text-yellow-500" />,
        users: <Users className="w-6 h-6 text-red-500" />,
        refresh: <RefreshCw className="w-6 h-6 text-purple-500" />,
        github: <BsGithub className="text-gray-800" />,
        instagram: <BsInstagram className="text-pink-500" />,
        linkedin: <BsLinkedin className="text-blue-700" />
    }
    return iconMap[icon]
}