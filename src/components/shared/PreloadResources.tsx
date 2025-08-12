import Head from 'next/head'

export function PreloadResources() {
    return (
        <Head>
            <link
                rel="preload"
                as="image"
                href="/images/senpai/hero.webp"
                type="image/webp"
            />
        </Head>
    )
}
