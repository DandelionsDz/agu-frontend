import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function LoadingLogo() {
    let [colors, setColors] = useState([
        "#ffcc01",
        "#6a737c",
        "#e3e6e8",
        "#ff8800",
        "#05a7ff",
    ]);
    useEffect(() => {
        setTimeout(() => {
            setColors([...colors]);
        }, 500);
    }, [colors]);
    return (
        <>
            <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"center"}
                paddingTop={"20px"}
            >
                <Typography
                    width={"8px"}
                    height={"8px"}
                    borderRadius={"50%"}
                    sx={{
                        background:
                            colors[Math.floor(Math.random() * colors.length)],
                    }}
                ></Typography>
                <Typography
                    width={"8px"}
                    height={"8px"}
                    borderRadius={"50%"}
                    sx={{
                        background:
                            colors[Math.floor(Math.random() * colors.length)],
                    }}
                ></Typography>
                <Typography
                    width={"8px"}
                    height={"8px"}
                    borderRadius={"50%"}
                    sx={{
                        background:
                            colors[Math.floor(Math.random() * colors.length)],
                    }}
                ></Typography>
            </Box>
        </>
    );
}

export default LoadingLogo;
