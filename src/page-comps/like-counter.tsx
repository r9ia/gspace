import { useState, useEffect } from "react"
import { onValue, set, increment } from "firebase/database"
import { Box, ButtonBase, Typography } from "@mui/material"
import { getGlassTabSx } from "../design/liquid-glass"
import { likesRef } from "../firebase"

export default function LikeCounter() {
    // null = still loading from Firebase
    const [count, setCount] = useState<number | null>(null)
    const [liked, setLiked] = useState<boolean>(() => {
        return localStorage.getItem("user_liked") === "true"
    })
    const [animate, setAnimate] = useState(false)

    // Live subscription: updates whenever anyone, anywhere, clicks
    useEffect(() => {
        return onValue(likesRef, (snap) => setCount(snap.val() ?? 0))
    }, [])

    useEffect(() => {
        localStorage.setItem("user_liked", liked.toString())
    }, [liked])

    const handleLike = () => {
        setLiked(true)
        set(likesRef, increment(1)).catch(console.error)
        setAnimate(false)
        setTimeout(() => setAnimate(true), 10)
    }

    useEffect(() => {
        if (animate) {
            const timer = setTimeout(() => setAnimate(false), 200)
            return () => clearTimeout(timer)
        }
    }, [animate])

    return (
        <Box
            sx={{
                position: "fixed",
                bottom: 24,
                right: 24,
                zIndex: 9999,
                display: "inline-flex",
                alignItems: "stretch",
                gap: "8px",
                fontFamily: "Helvetica, Arial, sans-serif",
                userSelect: "none",
            }}
        >
            {/* Facebook-style Like Button */}
            <ButtonBase
                onClick={handleLike}
                sx={{
                    ...getGlassTabSx('107,149,207'),
                    display: "inline-flex",
                    alignItems: "center",
                    backgroundColor: "#f0f2f5",
                    color: "#ffffff",
                    border: "1px solid #ccd0d5",
                    borderRadius: "6px",
                    padding: "4px 6px",
                    fontWeight: 600,
                    fontSize: "14px",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.12)",
                    transition: "all 0.15s ease-in-out",
                    "&:hover": {
                        backgroundColor: liked ? "#166fe5" : "#e4e6eb",
                    },
                }}
            >
                {/* --- LIKE ICON SLOT: PLACE YOUR ICON HERE --- */}
                <Box
                    component="span"
                    className="like-icon-slot"
                    sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "6px",
                        minWidth: "16px",
                        minHeight: "16px",
                    }}
                >
                    {/* 👇 Place your like icon (SVG, <img>, or MUI Icon) here */}
                    <img src="like.png" width={18} height={18} />

                    {/* 👆 Icon goes above */}
                </Box>

                <Typography
                    component="span"
                    sx={{
                        fontSize: "13px",
                        fontWeight: 700,
                        letterSpacing: "0.2px",
                        lineHeight: 1,
                    }}
                >
                    Like
                </Typography>
            </ButtonBase>

            {/* Facebook-style Speech Bubble Counter */}
            <Box
                sx={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#ffffff",
                    border: "1px solid #ccd0d5",
                    borderRadius: "4px",
                    padding: "0 10px",
                    boxSizing: "border-box",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#4b4f56",
                    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.08)",
                    lineHeight: 1,
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        top: "50%",
                        left: "-6px",
                        transform: "translateY(-50%)",
                        borderWidth: "5px 6px 5px 0",
                        borderStyle: "solid",
                        borderColor: "transparent #ccd0d5 transparent transparent",
                        display: "block",
                        width: 0,
                    },
                    "&::after": {
                        content: '""',
                        position: "absolute",
                        top: "50%",
                        left: "-5px",
                        transform: "translateY(-50%)",
                        borderWidth: "4px 5px 4px 0",
                        borderStyle: "solid",
                        borderColor: "transparent #ffffff transparent transparent",
                        display: "block",
                        width: 0,
                    },
                }}
            >
                {count ?? "–"}
            </Box>
        </Box>
    )
}
