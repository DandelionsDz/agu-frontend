import { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
function ErrorPage() {
    let navigate = useNavigate();
    useEffect(() => {
        navigate("/");
    }, []);
    return (
        <div>
            <h1>404 Not Found</h1>
        </div>
    );
}

export default ErrorPage;
