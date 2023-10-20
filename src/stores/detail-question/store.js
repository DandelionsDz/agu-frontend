import { create } from "zustand";

const useDetailQuestionStore = create((set) => ({
    data: {
        text: "",
        html: "",
        major: "ksp",
    },
    setData: (data) =>
        set((state) => ({
            data: { ...state.data, text: data.text, html: data.html },
        })),
    setMajor: (major) =>
        set((state) => ({
            data: {
                ...state.data,
                major,
            },
        })),
}));

export default useDetailQuestionStore;
