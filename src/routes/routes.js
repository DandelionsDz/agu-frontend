import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../pages/main-layout/MainLayout";
import DetailQuestion from "../pages/detail-question/DetailQuestion";
import App from "../App";
import PostQuestion from "../pages/post-question/PostQuestion";
import Welcome from "../pages/welcome/Welcome";
import ErrorPage from "../pages/error-page/ErrorPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <MainLayout />,
            },
            {
                path: "/home",
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
