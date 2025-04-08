'use client'

import ReactDOM from 'react-dom'

export function PreloadResources() {
    ReactDOM.preload('/images/senpai/hero.webp', { as: 'image' })
    return null
}
