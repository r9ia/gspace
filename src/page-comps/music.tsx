import { useState } from 'react'
import { Box } from '@mui/material'

const DEFAULT_SPOTIFY_URL = 'https://open.spotify.com/track/5619Ojc6t9evEEs3B7Drhe?si=be44240ca4f74c67'

function getEmbedUrl(spotifyUrl: string): string | null {
    try {
        const url = new URL(spotifyUrl)
        if (!url.hostname.endsWith('spotify.com')) return null
        const match = url.pathname.match(/(?:\/intl-[a-z]{2})?\/(track|album|playlist|episode|show)\/([a-zA-Z0-9]+)/)
        if (!match) return null
        const [, type, id] = match
        return `https://open.spotify.com/embed/${type}/${id}?`
    } catch {
        return null
    }
}

function Music() {
    const [embedUrl] = useState(getEmbedUrl(DEFAULT_SPOTIFY_URL))

    if (!embedUrl) return null

    return (
        <Box
            sx={{
                position: 'relative',
                borderRadius: 4,
                padding: '10px',
                background: 'linear-gradient(135deg, rgba(180,230,255,0.55), rgba(80,160,220,0.25))',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(255,255,255,0.6)',
                boxShadow:
                    '0 8px 32px rgba(31, 130, 200, 0.25), inset 0 1px 1px rgba(255,255,255,0.8), inset 0 -2px 6px rgba(0,90,150,0.15)',
                overflow: 'hidden',

                // glossy highlight streak across the top
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '45%',
                    background: 'linear-gradient(to bottom, rgba(255,255,255,0.55), rgba(255,255,255,0))',
                    borderRadius: '16px 16px 40% 40% / 16px 16px 100% 100%',
                    pointerEvents: 'none',
                },
            }}
        >
            <Box
                component="iframe"
                src={embedUrl}
                sx={{
                    width: '100%',
                    height: 152,
                    borderRadius: 3,
                    position: 'relative',
                    display: 'block',
                }}
                style={{ border: 'none' }}
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
            />
        </Box>
    )
}

export default Music