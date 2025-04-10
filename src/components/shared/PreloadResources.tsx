'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
    ReactDOM.preload('/images/senpai/hero.webp', {
        as: 'image',
        type: 'image/webp',
    })



    return null
}
