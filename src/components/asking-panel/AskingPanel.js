import { Alert, Box, Paper, Step, StepLabel, Stepper } from "@mui/material";
import Editor from "../editor/Editor";
import CustomButton from "../custom-button/CustomButton";
import MajorFilter from "../MajorFiler";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

function AskingPanel({ isAnswering }) {
    let [step, setStep] = useState(0);

    const QontoStepIcon = (props) => {
        const { active, completed, className } = props;
        return (
            <Box
                display={"flex"}
                height={"22px"}
                justifyContent={"center"}
                alignItems={"center"}
            >
                <Box
                    sx={{
                        width: "20px",
                        height: "20px",
                        background: completed
                            ? "#ffcc01"
                            : active
                            ? "#6a737c"
                            : "#e3e6e8",
                        borderRadius: "50%",
                    }}
                ></Box>
            </Box>
        );
    };

    return (
        <Paper
            elevation={2}
            sx={{
                display: "flex",
                flexDirection: "column",
                padding: "10px 10px",
                display: "flex",
                width: "100%",
                height: "auto",
                marginY: "15px",
            }}
        >
            <Box>
                <Stepper activeStep={step} alternativeLabel>
                    <Step key={"1"}>
                        <StepLabel StepIconComponent={QontoStepIcon}>
                            {"Chỉnh sửa"}
                        </StepLabel>
                    </Step>

                    <Step key={"2"}>
                        <StepLabel StepIconComponent={QontoStepIcon}>
                            {"Xem thử"}
                        </StepLabel>
                    </Step>

                    <Step key={"3"}>
                        <StepLabel StepIconComponent={QontoStepIcon}>
                            {"Xác nhận"}
                        </StepLabel>
                    </Step>
                </Stepper>
            </Box>
            <Alert sx={{ marginY: "8px" }} severity="warning">
                {isAnswering
                    ? "Trả lời câu hỏi nghiêm túc, nghiêm cấm các nội dung nhạy cảm và vi phạm pháp luật"
                    : " Không được đăng câu hỏi không liên quan đến chủ đề học tập, nội dung nhạy cảm, vi phạm pháp luật."}
            </Alert>
            {isAnswering || <MajorFilter />}
            <Editor />
            <br />
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}
            >
                <CustomButton
                    onClick={() => setStep(step + 1)}
                    padding="5px 20px"
                    width="fit-content"
                >
                    <SendIcon />
                </CustomButton>
            </Box>
        </Paper>
    );
}

export default AskingPanel;
