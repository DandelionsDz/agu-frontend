import { useState } from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Typography,
} from "@mui/material";
import PsychologyIcon from "@mui/icons-material/Psychology";
import { useQuery } from "@tanstack/react-query";
import AnswerWrapper from "./AnswerWrapper.js";
import { baseServer } from "../../consts/server.js";
const gradient =
    "radial-gradient( circle farthest-corner at 10% 20%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90% );";
const borderColor = "#e3e6e8";
function AIAnswer({ title, content, id }) {
    let {
        isLoading,
        error,
        data: answer,
    } = useQuery({
        queryKey: ["ai-answer", id],
        queryFn: () =>
            fetch(`${baseServer}/ai/?prompt=${content}`).then((res) =>
                res.json()
            ),
    });

    return (
        <Box
            sx={{
                display: "flex",
                padding: "0px 20px",
                width: "100%",
                marginTop: "5px",
            }}
        >
            <Box borderTop={`1px solid ${borderColor}`} width={"100%"}>
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
                                <pre>AI is thinking about your question...</pre>
                            ) : (
                                <>
                                    <AnswerWrapper>
                                        {answer?.answer}
                                    </AnswerWrapper>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                        }}
                                    >
                                        <Button variant="contained" disabled>
                                            Ask more
                                        </Button>
                                    </Box>
                                </>
                            )}
                        </div>
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    );
}

export default AIAnswer;
