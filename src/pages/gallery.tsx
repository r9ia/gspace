import { Box, ImageList, ImageListItem, Typography } from "@mui/material"
import { GALLERYPHOTOS } from "../Info/galleryPhotos"


function Gallery() {

    return (
        <Box>
            <Box sx={{ borderRadius: 2 }}>
                {/* Header row */}
                <Box sx={{
                    backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.02), rgba(0,0,0,0.02) 1px, transparent 5px, transparent 5px)",
                    px: 1,
                    bgcolor: "#cfdaf0"
                }}>
                    <Typography sx={{
                        fontSize: 20,
                        color: "#000000",
                        fontWeight: 550
                    }}>
                        Photo Gallery
                    </Typography>
                </Box>

                {/* Sub row */}
                <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    px: 1,
                    bgcolor: "#eceef2",
                    borderTop: "1.5px solid #f4f5f7",
                }}>
                    <Typography sx={{ fontSize: 16 }}>
                        Displaying: {GALLERYPHOTOS.length}
                    </Typography>
                </Box>
            </Box>

            <ImageList variant="masonry" cols={3} gap={8}>
                {GALLERYPHOTOS.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={item.img}
                            alt={item.title}
                            loading="lazy"
                            style={{ width: "100%", display: "block" }}
                        />
                    </ImageListItem>
                ))}
            </ImageList>

        </Box>
    )
}

export default Gallery