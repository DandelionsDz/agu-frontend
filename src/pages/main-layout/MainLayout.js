import { Container } from "@mui/material";
import "./MainLayout.css";
import Panel from "../../components/panel/Panel";
import ListQuestions from "../../components/list-questions/ListQuestions";
import TagTyping from "../../components/asking-panel/TagTyping";
function MainLayout() {
    return (
        <Container sx={{ padding: "5px 5px" }}>
            <Panel />
            <ListQuestions />
        </Container>
    );
}

export default MainLayout;
