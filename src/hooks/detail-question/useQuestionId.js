import { useQuery } from "@tanstack/react-query";
import { baseServer } from "../../consts/server";

function useQuestionId(questionId) {
    const {
        isLoading,
        error,
        data: question,
    } = useQuery({
        queryKey: ["question", questionId],
        queryFn: () =>
            fetch(`${baseServer}/question/${questionId}`).then((res) =>
                res.json()
            ),
    });

    return { isLoading, error, question };
}

export default useQuestionId;
