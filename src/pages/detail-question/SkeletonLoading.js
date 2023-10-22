import { Box, Container, Typography } from "@mui/material";
import { Skeleton } from "primereact/skeleton";
import { borderColor, subTextColor, titleTextColor } from "../../utils/colors";
function SkeletonLoading() {
    return (
        <Container sx={{ width: "100%", paddingTop: "20px" }}>
            <Box sx={{ width: "100%", height: "100%" }}>
                <Skeleton width="100%" height="30px" />
                <Box
                    sx={{
                        display: "flex",
                        padding: "10px 0px",
                        borderBottom: `1px solid ${borderColor}`,
                        marginBottom: "10px",
                    }}
                >
                    <Skeleton width="30%" height="15px" />
                </Box>

                <Skeleton width="100%" height="350px" />

                <Box
                    sx={{
                        paddingTop: "10px",
                        borderTop: `1px solid ${borderColor}`,
                        marginTop: "10px",
                    }}
                >
                    <Skeleton width="30%" height="20px" />
                    <br />
                    <Skeleton width="100%" height="80px" />
                </Box>
            </Box>
        </Container>
    );
}

export default SkeletonLoading;
