import { Box } from "@mui/material";
import CustomButton from "../custom-button/CustomButton";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";

import SendRoundedIcon from "@mui/icons-material/SendRounded";
import { Button } from "antd";
function Submitter({ step, setStep }) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent:
                    step <= 2 && step != 0 ? "space-between" : "flex-end",
            }}
        >
            {step >= 1 && step <= 2 && (
                <Button
                    onClick={() => setStep((pre) => pre - 1)}
                    style={{ margin: "0 10px" }}
                >
                    BACK
                </Button>
            )}
            {step <= 2 ? (
                <CustomButton
                    onClick={() => setStep((prev) => prev + 1)}
                    padding="5px 20px"
                    width="fit-content"
                >
                    <SendRoundedIcon />
                </CustomButton>
            ) : (
                <LoadingButton
                    sx={{ margin: "15px 0px" }}
                    loading
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="outlined"
                >
                    Đang đăng
                </LoadingButton>
            )}
        </Box>
    );
}

export default Submitter;
