import { Box, Container } from "@mui/material";
import AIAnswer from "../../components/ai-answer/AIAnswer";
import { useLocation } from "react-router-dom";
import Content from "./Content";
import Comment from "./Comment";

function DetailQuestion() {
    let {
        state: { title, content, tags, answers, views, id },
    } = useLocation();

    return (
        <Container sx={{ width: "100%", height: "100%", paddingTop: "20px" }}>
            <Box>
                <Content tags={tags} title={title} content={content.html} />

                <AIAnswer title={title} content={content.text} id={id} />

                <Comment answers={answers} />
            </Box>
        </Container>
    );
}

export default DetailQuestion;
