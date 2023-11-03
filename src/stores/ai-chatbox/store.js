import { create } from "zustand";

const useChatStore = create((set) => ({
    message: "",
    conversation: [
      
    ],

    setMessage: (message) =>
        set(() => ({
            message: message,
        })),

    setAddUserMessage: (message) => {
        set(state => ({
            conversation: [
                ...state.conversation,
                {role:"user", content:message}
            ],
        }))
    },
    setAddAiMessage: (message) => {
        set(state => ({
            conversation: [
                ...state.conversation,
                {role:"ai", question: message, content: ""}
            ],
        }))
    }
}));

export default useChatStore;
