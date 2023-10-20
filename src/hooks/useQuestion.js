import { useQuery } from "@tanstack/react-query";

function useQuestion() {
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

    return { isLoading, error, questions };
}

export default useQuestion;
