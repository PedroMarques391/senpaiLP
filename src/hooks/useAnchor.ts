
import { usePathname } from "@/src/i18n/navigation";
import { useLocale } from "next-intl";

export function useAnchor() {
    const pathname = usePathname() as string;
    const locale = useLocale()

    const isHomePage = pathname === '/';

    const handleHref = (anchorId: string): string => {
        if (isHomePage) {
            return `#${anchorId}`;
        }

        return `/${locale}#${anchorId}`;
    };

    return { handleHref };
}