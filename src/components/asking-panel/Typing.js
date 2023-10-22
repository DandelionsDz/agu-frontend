import { Alert, Box } from "@mui/material";
import Editor from "../editor/Editor";
import MajorFilter from "../MajorFiler";
function Typing({ isAnswering, store }) {
    return (
        <Box>
            <Alert sx={{ marginY: "8px" }} severity="warning">
                {isAnswering
                    ? "Trả lời câu hỏi nghiêm túc, nghiêm cấm các nội dung nhạy cảm và vi phạm pháp luật"
                    : " Không được đăng câu hỏi không liên quan đến chủ đề học tập, nội dung nhạy cảm, vi phạm pháp luật."}
            </Alert>

            {isAnswering || (
                <>
                    <MajorFilter store={store} />
                </>
            )}
            <Editor store={store} />
            <br />
        </Box>
    );
}

export default Typing;
