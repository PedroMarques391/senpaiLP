import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
    locales: ["en", "pt", "jp", "es"],
    defaultLocale: "pt",

    "pathnames": {
        "/": {
            "en": "/",
            "pt": "/",
            "jp": "/",
            "es": "/"
        },
        "/about": {
            "en": "/about",
            "pt": "/sobre",
            "jp": "/abauto",
            "es": "/sobre-nosotros"
        },
        "/partners": {
            "en": "/partners",
            "pt": "/parceiros",
            "jp": "/paatonaa",
            "es": "/socios"
        },
        "/thank-you": {
            "en": "/thank-you",
            "pt": "/agradecimento",
            "jp": "/arigatou",
            "es": "/gracias"
        },
        "/privacidade": {
            "en": "/privacy",
            "pt": "/privacidade",
            "jp": "/puraiBasii",
            "es": "/privacidad"
        },
        "/termo-de-uso": {
            "en": "/terms-of-use",
            "pt": "/termo-de-uso",
            "jp": "/toumuobu",
            "es": "/terminos-de-uso"
        }
    }
});