import { Alert } from "@mui/material";
import Formater from "./Formater";

function AnswerWrapper({ children }) {
    if (!children)
        return (
            <Alert
                variant="outlined"
                severity="warning"
                sx={{ margin: "5px 0" }}
            >
                Sorry, we can not get answer from AI :(
            </Alert>
        );

    return (
        <pre style={{ textAlign: "left" }}>
            <Formater>{children}</Formater>
        </pre>
    );
}

export default AnswerWrapper;
