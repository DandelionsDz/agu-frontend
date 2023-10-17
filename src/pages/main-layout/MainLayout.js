import { Container } from "@mui/material";
import "./MainLayout.css";
import Panel from "../../components/panel/Panel";
import ListQuestions from "../../components/list-questions/ListQuestions";
function MainLayout() {
    return (
        <Container sx={{ height: "100%", padding: "5px 5px" }}>
            <Panel />
            <ListQuestions />
        </Container>
    );
}

export default MainLayout;
