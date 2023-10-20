import { Alert, Box, Typography } from "@mui/material";
import useDataStore from "../../stores/asking-panel/store";

function Preview({ children }) {
    let data = useDataStore((state) => state.data);
    return (
        <Box padding={"15px 5px"}>
            <Alert
                sx={{
                    padding: "15px 5px",
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: "5px",
                }}
                severity="info"
            >
                Kiểm tra bài đăng của bạn trước khi gửi
            </Alert>
            <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
        </Box>
    );
}

export default Preview;
