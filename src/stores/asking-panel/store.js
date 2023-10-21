import { create } from "zustand";

const useDataStore = create((set) => ({
    data: {
        text: "",
        html: "",
        major: "ksp",
        tags: [],
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
    setTags: (tags) =>
        set((state) => ({
            data: {
                ...state.data,
                tags,
            },
        })),
}));

export default useDataStore;
