import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import CircleLogo from "../components/CircleLogo";

function TextBlock({ children }) {
    let [content] = useState(children);
    let [currentLength, setCurrentLength] = useState(1);
    let currentCurrent = content.substr(0, currentLength);
    let isFinish = currentCurrent == content;

    useEffect(
        () => {
            setTimeout(() => {
                setCurrentLength(currentLength + 3);
            }, 20);
        },
        isFinish ? [] : [currentLength]
    );

    return (
        <pre style={{ textAlign: "left" }}>
            {currentCurrent}{" "}
            <Box
                sx={{
                    width: "8px",
                    height: "12px",
                    background: isFinish ? "white" : "black",
                    display: "inline-block",
                }}
            ></Box>
            {isFinish && <CircleLogo />}
        </pre>
    );
}

export default TextBlock;
