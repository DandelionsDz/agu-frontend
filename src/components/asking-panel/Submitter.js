import { Box } from "@mui/material";
import CustomButton from "../custom-button/CustomButton";
import SendIcon from "@mui/icons-material/Send";
import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
function Submitter({ step, setStep }) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-end",
            }}
        >
            {step <= 2 ? (
                <CustomButton
                    onClick={() => setStep((prev) => prev + 1)}
                    padding="5px 20px"
                    width="fit-content"
                >
                    <SendIcon />
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
