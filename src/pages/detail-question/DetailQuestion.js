import { Box, Typography, Button, Container } from "@mui/material";
import AIAnswer from "../../components/ai-answer/AIAnswer";
import HumanAnswer from "./HumanAnswer";
import CustomButton from "../../components/custom-button/CustomButton";
import { useLocation } from "react-router-dom";
import AskingPanel from "../../components/asking-panel/AskingPanel";
import { useState } from "react";
const titleTextColor = "#3b4045";
const subTextColor = "#6a737c";
const borderColor = "#e3e6e8";
const buttonGradient =
    "radial-gradient( circle farthest-corner at 10% 20%, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 90% );";

function DetailQuestion() {
    let {
        state: { title, content, votes, answers, views, id },
    } = useLocation();

    let [isAnswering, setIsAnswering] = useState(false);

    return (
        <Container sx={{ width: "100%", height: "100%", paddingTop: "20px" }}>
            <Box>
                <Typography
                    fontSize={"18px"}
                    padding={"8px 0px"}
                    color={titleTextColor}
                >
                    {title}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        borderBottom: `1px solid ${borderColor}`,
                    }}
                >
                    <Typography color={subTextColor} mx={"4px"}>
                        Asked{" "}
                    </Typography>
                    <Typography>Today </Typography>
                </Box>

                <Box padding={"20px 10px"}>{content}</Box>

                <Box>
                    <Box sx={{ width: "50%", display: "flex" }}>
                        <Typography paddingRight={"5px"} color={subTextColor}>
                            tags:{" "}
                        </Typography>
                        <Typography
                            sx={{
                                background: "#E1ECF4",
                                color: "#39739D",
                                padding: "2px 5px",
                                marginRight: "5px",
                                borderRadius: "5px",
                            }}
                        >
                            java
                        </Typography>
                        <Typography
                            sx={{
                                background: "#E1ECF4",
                                color: "#39739D",
                                padding: "2px 5px",
                                marginRight: "5px",
                                borderRadius: "5px",
                            }}
                        >
                            c++
                        </Typography>
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        padding: "0px 20px",
                        width: "100%",
                        marginTop: "5px",
                    }}
                >
                    <Box borderTop={`1px solid ${borderColor}`} width={"100%"}>
                        <AIAnswer title={title} content={content} id={id} />
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        marginTop: "5px",
                        height: "10%",
                    }}
                >
                    <Box
                        paddingBottom={"20px"}
                        borderTop={`1px solid ${borderColor}`}
                        width={"100%"}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                padding: "10px",
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{ fontSize: "18px", textAlign: "left" }}
                            >
                                All Answers{" "}
                            </Typography>
                            <CustomButton
                                onClick={() => setIsAnswering(!isAnswering)}
                            >
                                Answers
                            </CustomButton>
                        </Box>

                        {isAnswering && <AskingPanel isAnswering={true} />}

                        {answers?.length > 0
                            ? answers.map((answer) => {
                                  return <HumanAnswer answer={answer} />;
                              })
                            : "There is no answer yet"}
                    </Box>
                </Box>
            </Box>
        </Container>
    );
}

export default DetailQuestion;
