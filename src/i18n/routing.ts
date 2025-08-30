import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "pt"],
    defaultLocale: "pt",

    pathnames: {
        "/about": {
            en: "/about",
            pt: "/sobre"
        },
        "/partners": {
            en: "/partners",
            pt: "/parceiros"
        },
        "/thank-you": {
            en: "/thank-you",
            pt: "/agradecimento"
        }

    },

});