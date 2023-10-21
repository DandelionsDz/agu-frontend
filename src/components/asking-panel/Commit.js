import { Alert, Box, Typography } from "@mui/material";

function Commit() {
    return (
        <Box padding={"15px 5px"}>
            <Alert
                sx={{ display: "flex", justifyContent: "center" }}
                icon={false}
                severity="success"
            >
                Bài đăng của bạn đã sẵng sàng để gửi, hãy nhấn nút gửi để hoàn
                tất !
            </Alert>
        </Box>
    );
}

export default Commit;
