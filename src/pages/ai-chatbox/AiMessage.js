import { Box, Typography } from "@mui/material";
import Formater from "../../components/ai-answer/Formater";
import useAnswer from "../../hooks/ai-chatbox/useAnswer";
import { Spin } from "antd";


function AiMessage({ children }) {
    let {isLoading, error, answer} = useAnswer(children.question);
    return (
        <Box
            className="ai-message"
            sx={{
                background: "#f7f7f8",
                display: "flex",
                justifyContent: "flex-start",
                width: "100%",
            }}
        >
            <Box
                width={"10%"}
              
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    width={"30px"}
                    src="//qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.poe.bots.chatGPTAvatar.png-26-839d23eef4d58ae9.png"
                />
            </Box>
            <Box sx={{ width: "90%" }}>
                <pre style={{ textAlign: "left" }}>
                    {answer?.answer ? <Formater style="dark">{answer.answer}</Formater> : <Spin size="small" />}
                </pre>
            </Box>
        </Box>
    );
}

export default AiMessage;
