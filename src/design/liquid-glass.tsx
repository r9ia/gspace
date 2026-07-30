export const GLASS_TAB_SX = {
    position: 'relative',
    color: 'white',
    borderRadius: 4,
    overflow: 'hidden',
    background: 'linear-gradient(135deg, rgba(107,149,207,0.55), rgba(107,149,207,0.25))',
    backdropFilter: 'blur(14px)',
    WebkitBackdropFilter: 'blur(14px)',
    border: '1px solid rgba(255,255,255,0.6)',
    boxShadow:
        '0 8px 32px rgba(107, 149, 207, 0.35), inset 0 1px 1px rgba(255,255,255,0.8), inset 0 -2px 6px rgba(107,149,207,0.25)',
    transition: 'background 200ms ease',
    '&:hover': {
        
    },

    // highlight streak across the top
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
}