import { useState } from 'react'
import { Box } from '@mui/material'

const DEFAULT_SPOTIFY_URL = 'https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC'

function getEmbedUrl(spotifyUrl: string): string | null {
    try {
        const url = new URL(spotifyUrl)
        if (!url.hostname.endsWith('spotify.com')) return null
        const match = url.pathname.match(/(?:\/intl-[a-z]{2})?\/(track|album|playlist|episode|show)\/([a-zA-Z0-9]+)/)
        if (!match) return null
        const [, type, id] = match
        return `https://open.spotify.com/embed/${type}/${id}?theme=0`
    } catch {
        return null
    }
}

function Music() {
    const [embedUrl] = useState(getEmbedUrl(DEFAULT_SPOTIFY_URL))

    if (!embedUrl) return null

    return (
        <Box
            component="iframe"
            src={embedUrl}
            sx={{ width: '100%', height: 152, borderRadius: 2 }}
            style={{ border: 'none' }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
        />
    )
}

export default Music
