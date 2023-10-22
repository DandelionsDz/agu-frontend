import { Box, Typography } from "@mui/material";
import { ProgressBar } from "primereact/progressbar";

import LoadingLogo from "../loading-logo/LoadingLogo";
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
                <ProgressBar
                    mode="indeterminate"
                    style={{ height: "2px" }}
                ></ProgressBar>
            </Box>
        </>
    );
}

export default TopBarLoading;
