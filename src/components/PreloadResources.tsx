'use client'

import { useEffect } from 'react'
import ReactDOM from 'react-dom'

export function PreloadResources() {
    useEffect(() => {
        ReactDOM.preload('/images/senpai/hero.webp', {
            as: 'image',
            type: 'image/webp',
        })
    }, [])

    return null
}
