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
            "en": "/thank-you",
            "pt": "/agradecimento",
            "jp": "/arigatou",
            "es": "/gracias"
        },
        "/termo-de-uso": {
            "en": "/thank-you",
            "pt": "/agradecimento",
            "jp": "/arigatou",
            "es": "/gracias"
        }
    }
});