import { useQuery } from "@tanstack/react-query";
import { baseServer } from "../consts/server";

function useQuestion() {
    const {
        isLoading,
        error,
        data: questions,
    } = useQuery({
        queryKey: ["questions"],
        queryFn: () =>
            fetch(
                `${baseServer}/question`
            ).then((res) => res.json()),
    });

    return { isLoading, error, questions };
}

export default useQuestion;
