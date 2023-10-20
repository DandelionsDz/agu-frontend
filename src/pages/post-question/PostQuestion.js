import { Box } from "@mui/material";
import AskingPanel from "../../components/asking-panel/AskingPanel";
import useDataStore from "../../stores/asking-panel/store";

function PostQuestion() {
    let store = useDataStore();
    return (
        <Box padding={"10px"}>
            <AskingPanel store={store} />
        </Box>
    );
}

export default PostQuestion;
