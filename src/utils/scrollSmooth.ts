export function scrollSmooth(selector: string): void {
    if (selector) {
        const el = document.querySelector(selector);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 50;
            window.scrollTo({
                top,
                behavior: "smooth"
            });
        }
    }
}