import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/main-layout/MainLayout";
import DetailQuestion from "../pages/detail-question/DetailQuestion";
import App from "../App";
import PostQuestion from "../pages/post-question/PostQuestion";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <MainLayout />,
            },
            {
                path: "/detail-question/:id",
                element: <DetailQuestion />,
            },
            {
                path: "/post-question",
                element: <PostQuestion />,
            },
        ],
    },
]);

export default router;
