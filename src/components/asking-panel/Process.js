import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { Steps } from "antd";

function Process({ step }) {
    return (
        <Box sx={{ padding: "5px 10px" }}>
            <Steps
                size="small"
                current={step}
                items={[
                    {
                        title: "Soạn nội dung",
                    },
                    {
                        title: "Xem thử",
                    },
                    {
                        title: "Xác nhận",
                    },
                ]}
            />
        </Box>
    );
}

export default Process;
