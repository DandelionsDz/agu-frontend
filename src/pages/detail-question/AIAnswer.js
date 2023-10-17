import { useState } from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography,
} from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { useQuery } from "@tanstack/react-query";

import TextBlock from "../../utils/ai.answer.util.js";
import CircleLogo from "../../components/CircleLogo.js";

const gradient =
    "radial-gradient( circle farthest-corner at 10% 20%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90% );";

function AIAnswer({ title, content, id }) {
    let {
        isLoading,
        error,
        data: answer,
    } = useQuery({
        queryKey: ["ai-answer", id],
        queryFn: () =>
            fetch(
                `https://stunning-waddle-xqxjp4w4qpwfp4xp-3000.app.github.dev/ai/?prompt=${content}`
            ).then((res) => res.json()),
    });

    return (
        <Accordion sx={{ boxShadow: "none" }}>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ borderRadius: "0px" }}
            >
                <PsychologyIcon />
                <Typography
                    sx={{
                        background: gradient,
                        padding: "2px 5px",
                        borderRadius: "5px",
                        color: "#fff",
                        fontFamily: "fantsong sans-serif",
                    }}
                >
                    AI's Answers
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div>
                    <pre></pre>
                    {isLoading ? (
                        "AI is thinking about your question..."
                    ) : (
                        <>
                            <TextBlock>{answer?.message}</TextBlock>
                        </>
                    )}
                </div>
            </AccordionDetails>
        </Accordion>
    );
}

export default AIAnswer;
