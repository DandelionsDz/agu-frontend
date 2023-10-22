import { Box } from "@mui/material";
import Question from "./Question";
import useQuestion from "../../hooks/detail-question/useQuestion";
import Loading from "../../pages/main-layout/Loading";
import Error from "../../pages/main-layout/Error";

function ListQuestion() {
    const { isLoading, error, questions } = useQuestion();

    if (isLoading) return <Loading />;

    if (error) return <Error />;

    return (
        <Box paddingBottom={"10px"}>
            {questions?.map((question, index) => (
                <Question key={question.id} {...question} />
            ))}
        </Box>
    );
}

export default ListQuestion;
