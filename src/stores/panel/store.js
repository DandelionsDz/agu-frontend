import { create } from "zustand";

const useSearchQuery = create((set) => ({
    data: {
        major: "ksp",
    },
    setMajor: (filterData) =>
        set((state) => ({
            data: {
                major: filterData,
            },
        })),
}));

export default useSearchQuery;
