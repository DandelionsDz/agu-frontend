import { Box, Container } from "@mui/material";
import AIAnswer from "../../components/ai-answer/AIAnswer";
import { useParams } from "react-router-dom";
import Content from "./Content";
import Comment from "./Comment";
import useQuestionId from "../../hooks/detail-question/useQuestionId";
import SkeletonLoading from "./SkeletonLoading";
import Error from "../main-layout/Error";

function DetailQuestion() {
    let params = useParams();
    let { isLoading, error, question } = useQuestionId(params.id);
    if (isLoading) return <SkeletonLoading />;
    if (error) return <Error />;
    return (
        <Container maxWidth={"md"} sx={{ width: "100%" }}>
            <Box>
                <Content
                    tags={question.tags}
                    title={question.title}
                    content={question.content.html}
                />

                <AIAnswer
                    title={question.title}
                    content={question.content.text}
                    id={question.id}
                />

                <Comment answers={question.answers} />
            </Box>
        </Container>
    );
}

export default DetailQuestion;
