import { IReasonsCard } from "@/src/types";
import { useTranslations } from "next-intl";



export function ReasonsCard({ icon: Icon, title, text }: IReasonsCard) {
    const t = useTranslations("partners");
    return (
        <div className="bg-content-inverse p-8 rounded-lg hover:shadow-md transition-shadow shadow-primary-theme group">
            <Icon className="h-12 w-12 mx-auto text-primary-theme/60 mb-4 group-hover:text-primary-theme transition-colors" />
            <h1 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary-theme transition-colors">
                {t(`${title}`)}
            </h1>
            <p className="text-gray-600">
                {t(`${text}`)}
            </p>
        </div>
    );
}
