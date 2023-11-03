import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Button,
    Typography,
} from "@mui/material";

import { useQuery } from "@tanstack/react-query";
import AnswerWrapper from "./AnswerWrapper.js";
import { baseServer } from "../../consts/server.js";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { borderColor } from "../../utils/colors.js";
import { useNavigate } from "react-router-dom";

const gradient =
    "radial-gradient( circle farthest-corner at 10% 20%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90% );";

function AIAnswer({ title, content, id }) {
    const navigate = useNavigate();
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

    const handleAskMore = () => {
        navigate("/chatbox");
    };

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
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <img
                                style={{ borderRadius: "50%" }}
                                width={"20px"}
                                height={"20px"}
                                src="//qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.poe.bots.chatGPTAvatar.png-26-839d23eef4d58ae9.png"
                            />
                            <Typography
                                sx={{ marginLeft: "4px", fontWeight: "bold" }}
                            >
                                ChatGPT
                            </Typography>
                            <Typography sx={{ margin: "0 4px" }}>•</Typography>
                            <Typography
                                sx={{
                                    color: "#5d5cde",
                                    fontWeight: "600",
                                    fontSize: "12px",
                                }}
                            >
                                V4
                            </Typography>
                        </Box>
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
                                            paddingTop: "10px",
                                            borderTop: `1px solid ${borderColor}}`,
                                            display: "flex",
                                            justifyContent: "flex-end",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: {
                                                    xs: "100%",
                                                    md: "fit-content",
                                                },
                                                cursor: "pointer",
                                            }}
                                        >
                                            <Button
                                                onClick={handleAskMore}
                                                sx={{
                                                    textTransform: "none",
                                                    padding: "4px 10px",
                                                    borderRadius: "20px",
                                                    border: "1px solid #ccc",
                                                    color: "#636466",
                                                }}
                                            >
                                                <pre
                                                    style={{
                                                        fontSize: "12px",
                                                        margin: "0",
                                                        marginRight: "5px",
                                                    }}
                                                >
                                                    Ask More
                                                </pre>

                                                <ChatBubbleOutlineOutlinedIcon />
                                            </Button>
                                        </Box>
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
