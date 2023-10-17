import { Alert, Box, Paper } from "@mui/material";
import Editor from "../editor/Editor";
import CustomButton from "../custom-button/CustomButton";
import MajorFilter from "../MajorFiler";

function AskingPanel() {
    return (
        <Paper
            elevation={2}
            sx={{
                display: "flex",
                flexDirection: "column",
                padding: "10px 10px",
                display: "flex",
                width: "100%",
                height: "auto",
                marginY: "15px",
            }}
        >
            <Alert sx={{ marginY: "8px" }} severity="warning">
                Không được đăng câu hỏi không liên quan đến chủ đề học tập, nội
                dung nhạy cảm, vi phạm pháp luật.
            </Alert>
            <MajorFilter />
            <Editor />
            <br />
            <Box sx={{ display: "flex", justifyContent: "end" }}>
                <CustomButton padding="10px 5px" width="fit-content">
                    SUBMIT
                </CustomButton>
            </Box>
        </Paper>
    );
}

export default AskingPanel;
