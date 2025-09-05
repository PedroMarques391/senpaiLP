
import { usePathname } from "@/src/i18n/navigation";
export function useAnchor() {
    const pathname = usePathname() as string;

    const isHomePage = pathname === "/";

    const handleHref = (anchorId: string): string => {
        if (isHomePage) {
            return `#${anchorId}`;
        }

        return `/#${anchorId}`;
    };

    return { handleHref };
}