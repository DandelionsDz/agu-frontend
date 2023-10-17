import { Box, Typography } from "@mui/material";

function CircleLogo() {
    return (
        <Box display={"flex"} flexDirection={"row"} justifyContent={"end"}>
            <Typography
                width={"6px"}
                height={"6px"}
                borderRadius={"50%"}
                sx={{ background: "#ffcc01" }}
            ></Typography>
            <Typography
                width={"6px"}
                height={"6px"}
                borderRadius={"50%"}
                sx={{ background: "#6a737c" }}
            ></Typography>
            <Typography
                width={"6px"}
                height={"6px"}
                borderRadius={"50%"}
                sx={{ background: "#e3e6e8" }}
            ></Typography>
        </Box>
    );
}

export default CircleLogo;
