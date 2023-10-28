import { Alert, Box } from "@mui/material";
import Editor from "../editor/Editor";
import MajorFilter from "../MajorFiler";
function Typing({ isAnswering, store }) {
    return (
        <Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Alert
                    sx={{ width: "fit-content", marginY: "8px" }}
                    severity="warning"
                >
                    {isAnswering
                        ? "Trả lời câu hỏi nghiêm túc, nghiêm cấm các nội dung spam hoặc không liên quan đến học tập"
                        : "Không được spam hoặc không liên quan đến học tập"}
                </Alert>
            </Box>

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
