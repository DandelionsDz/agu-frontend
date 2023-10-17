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
                "https://psychic-space-sniffle-p6g4x5v5g4x3rxv9-3000.app.github.dev/question"
            ).then((res) => res.json()),
    });

    if (isLoading) return "Loading...";

    if (error) return "An error has occurred: " + error.message;

    return (
        <Box>
            {questions?.map((question, index) => (
                <Question {...question} />
            ))}
        </Box>
    );
}

export default ListQuestion;
