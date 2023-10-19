import { useQuery } from "@tanstack/react-query";
import { Box } from "@mui/material";
import Question from "./Question";

function ListQuestion() {
    const {
        isLoading,
        error,
        data: questions,
    } = useQuery({
        queryKey: ["questions"],
        queryFn: () =>
            fetch(
                "https://stunning-waddle-xqxjp4w4qpwfp4xp-3000.app.github.dev/question"
            ).then((res) => res.json()),
    });

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <Box paddingBottom={"10px"}>
            {questions?.map((question, index) => (
                <Question {...question} />
            ))}
        </Box>
    );
}

export default ListQuestion;
