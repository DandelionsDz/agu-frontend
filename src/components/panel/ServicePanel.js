import { Box, Dialog, DialogTitle, Typography } from "@mui/material";
import { borderColor } from "../../utils/colors";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import CircleLogo from "../CircleLogo";
import PostQuestion from "../../pages/post-question/PostQuestion";
import { isMobile } from "react-device-detect";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "antd";
import AiChatBox from "../../pages/ai-chatbox/AiChatBox";
function ServicePanel() {
    let [isDialogOpen, setIsDialogOpen] = useState(false);
    let navigate = useNavigate();
    const handleOpenDialog = (dialog) => {
        if (!isMobile) {
            setIsDialogOpen(true);
            return;
        }

        navigate("/post-question");
    };
    return (
        <>
            <Modal
                onCancel={() => setIsDialogOpen(false)}
                width={"1000px"}
                footer={null}
                title="Tạo câu hỏi"
                open={isDialogOpen}
                styles={{height: "1000px"}}
            >
           <PostQuestion />
            </Modal>
            <Box
                sx={{
                    border: `1px solid ${borderColor}`,
                    padding: "8px 8px",
                    marginTop: "10px",
                }}
            >
                <Box sx={{ display: "flex" }}>
                    <Box
                        sx={{
                            width: "10%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {" "}
                        <AccountCircleIcon
                            fontSize="large"
                            sx={{ cursor: "pointer" }}
                        />
                    </Box>
                    <Box sx={{ width: "90%" }}>
                        <Box
                            onClick={() => handleOpenDialog()}
                            sx={{
                                "&:hover": {
                                    border: `1px solid #ccc`,
                                },
                                cursor: "pointer",
                                paddingLeft: "10px",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "5px",
                                width: "100%",
                                height: "30px",
                                background: "#f7f7f8",
                                border: `1px solid ${borderColor}`,
                            }}
                        >
                            <Typography color={"#939598"}>
                                Do you want to ask something?
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <Box
                        sx={{
                            width: "10%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <CircleLogo />
                    </Box>

                    <Box sx={{ width: "90%" }}>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                paddingTop: "5px",
                            }}
                        >
                            <Box
                                sx={{
                                    ":hover": {
                                        background: "#f7f7f8",
                                    },
                                    borderRadius: "5px",
                                    padding: "5px 15px",
                                    cursor: "pointer",
                                }}
                                color={"#636466"}
                                fontWeight={"500"}
                                display={"flex"}
                                justifyItems={"center"}
                                onClick={() => handleOpenDialog(0)}
                            >
                                <LiveHelpOutlinedIcon
                                    sx={{ marginRight: "3px" }}
                                />
                                Ask
                            </Box>
                            <Box color={"#ccc"}>|</Box>
                            <Box
                                sx={{
                                    ":hover": {
                                        background: "#f7f7f8",
                                    },
                                    cursor: "pointer",
                                    padding: "5px 15px",
                                    borderRadius: "5px",
                                }}
                                color={"#636466"}
                                fontWeight={"500"}
                                display={"flex"}
                               
                            >
                                <ChatBubbleOutlineOutlinedIcon
                                    sx={{ marginRight: "3px" }}
                                />
                                Chatbot
                            </Box>
                            <Box color={"#ccc"}>|</Box>
                            <Box
                                sx={{
                                    ":hover": {
                                        background: "#f7f7f8",
                                    },
                                    cursor: "pointer",
                                    padding: "5px 15px",
                                    borderRadius: "5px",
                                }}
                                color={"#636466"}
                                fontWeight={"500"}
                                display={"flex"}
                            >
                                <SupportAgentOutlinedIcon
                                    sx={{ marginRight: "3px" }}
                                />
                                Help
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default ServicePanel;
