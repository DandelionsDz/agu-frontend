import { Box, Container } from "@mui/material";
import AskingPanel from "../../components/asking-panel/AskingPanel";
import useDataStore from "../../stores/asking-panel/store";

function PostQuestion() {
    let store = useDataStore();
    return (
        <Container padding={"10px"}>
            <AskingPanel store={store} />
        </Container>
    );
}

export default PostQuestion;
