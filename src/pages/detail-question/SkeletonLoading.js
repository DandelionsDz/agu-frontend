import { Box, Container, Skeleton } from "@mui/material";
import { borderColor } from "../../utils/colors";

function SkeletonLoading() {
    return (
        <Container
            sx={{ width: "100%", paddingTop: "20px", paddingBottom: "20px" }}
        >
            <Box sx={{ width: "100%", height: "100%" }}>
                <Skeleton variant="rounded" width="100%" height="30px" />
                <Box
                    sx={{
                        display: "flex",
                        padding: "10px 0px",
                        borderBottom: `1px solid ${borderColor}`,
                        marginBottom: "10px",
                    }}
                >
                    <Skeleton variant="rounded" width="30%" height="15px" />
                </Box>
                <Skeleton
                    animation="wave"
                    variant="rounded"
                    width="100%"
                    height={"350px"}
                />
                <Box
                    sx={{
                        paddingTop: "10px",
                        borderTop: `1px solid ${borderColor}`,
                        marginTop: "10px",
                    }}
                >
                    <Skeleton variant="rounded" width="30%" height="20px" />
                    <br />
                    <Skeleton variant="rounded" width="100%" height="80px" />
                    <br />
                    <Skeleton variant="rounded" width="100%" height="80px" />
                </Box>
            </Box>
        </Container>
    );
}

export default SkeletonLoading;
