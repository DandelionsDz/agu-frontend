import { Box, LinearProgress } from "@mui/material";

function TopBarLoading() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "2px",
                    position: "fixed",
                    left: "0",
                    top: "0",
                    zIndex: "9999",
                }}
            >
                <LinearProgress sx={{ maxHeight: "2px" }} />
            </Box>
        </>
    );
}

export default TopBarLoading;
