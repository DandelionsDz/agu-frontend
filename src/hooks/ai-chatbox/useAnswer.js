import { useQuery } from "@tanstack/react-query";
import { baseServer } from "../../consts/server";

function useAnswer(content) {
    let {
        isLoading,
        error,
        data: answer,
    } = useQuery({
        queryKey: ["ai-answer", content],
        queryFn: () =>
            fetch(`${baseServer}/ai/?prompt=${content}`).then((res) =>
                res.json()
            ),
    });

    return {isLoading, error, answer};
}

export default useAnswer;
