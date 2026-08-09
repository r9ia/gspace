
export function getGlassTabSx(rgbColour: string = "107,149,207", opacity: [number, number] = [0.9, 0.5]) {
    return {
        position: 'relative',
        color: 'white',
        borderRadius: 4,
        overflow: 'hidden',
        background: `linear-gradient(135deg, rgba(${rgbColour},${opacity[0]}), rgba(${rgbColour},${opacity[1]}))`,
        backdropFilter: 'blur(14px)',
        WebkitBackdropFilter: 'blur(14px)',
        border: '1px solid rgba(255,255,255,0.4)',
        boxShadow:
            `0 8px 32px rgba(${rgbColour}, 0.25), inset 0 1px 1px rgba(255,255,255,0.6), inset 0 -2px 6px rgba(${rgbColour},0.15)`,
        transition: 'background 200ms ease',
        '&:hover': {},

        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '45%',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0))',
            borderRadius: '16px 16px 40% 40% / 16px 16px 100% 100%',
            pointerEvents: 'none',
        },
    }
}



