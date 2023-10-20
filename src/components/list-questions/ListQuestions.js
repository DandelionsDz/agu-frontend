import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/material";
import Question from "./Question";
import useQuestion from "../../hooks/useQuestion";

function ListQuestion() {
    const { isLoading, error, questions } = useQuestion();

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <Box paddingBottom={"10px"}>
            {questions?.map((question, index) => (
                <Question key={question.id} {...question} />
            ))}
        </Box>
    );
}

export default ListQuestion;
