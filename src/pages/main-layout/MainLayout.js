import { Container } from "@mui/material";
import "./MainLayout.css";
import Panel from "../../components/panel/Panel";
import ListQuestions from "../../components/list-questions/ListQuestions";
import TagTyping from "../../components/asking-panel/TagTyping";
import ServicePanel from "../../components/panel/ServicePanel";
function MainLayout() {
    return (
        <Container maxWidth={"md"} sx={{ padding: "5px 5px" }}>
            <ServicePanel />
            <Panel />
            <ListQuestions />
        </Container>
    );
}

export default MainLayout;
