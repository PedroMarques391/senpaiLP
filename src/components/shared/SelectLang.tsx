import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/src/components/ui/select";
import { useRouter, usePathname as usePath } from "@/src/i18n/navigation";
import { routing } from "@/src/i18n/routing";
import { useLocale } from "next-intl";

export const SelectLang = () => {
    const router = useRouter();
    const locale = useLocale();
    const pathname = usePath();

    function handleSelectLocale(currentLocale: (typeof routing.locales)[number]) {
        const query = Object.fromEntries(
            new URLSearchParams(window.location.search)
        );

        router.replace({ pathname, query }, { locale: currentLocale });
    }

    return (
        <div className="fixed top-25 left-5 lg:static">
            <Select
                defaultValue={locale}
                onValueChange={(value) =>
                    handleSelectLocale(value as (typeof routing.locales)[number])
                }
            >
                <SelectTrigger className="w-auto backdrop-blur-md rounded-xl ">
                    <SelectValue placeholder={locale} />
                </SelectTrigger>
                <SelectContent className="backdrop-blur-md bg-content-inverse/90 rounded-xl">
                    {routing.locales.map((loc) => (
                        <SelectItem
                            key={loc}
                            value={loc}
                            className="cursor-pointer hover:bg-content-inverse transition-colors "
                        >
                            {loc.toUpperCase()}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
};
