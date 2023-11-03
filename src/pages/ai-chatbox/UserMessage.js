import { Box, Typography } from "@mui/material";

function UserMessage({ children }) {
    return (
        <Box
            sx={{
                padding: "14px 0px",
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
            }}
        >
            <Box sx={{ width: "90%" }}>
                <Typography sx={{ textAlign: "right" }}>
                   {children}
                </Typography>
            </Box>
            <Box
                width={"10%"}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    width={"50%"}
                    src="//qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.poe.bots.chatGPTAvatar.png-26-839d23eef4d58ae9.png"
                />
            </Box>
        </Box>
    );
}

export default UserMessage;
