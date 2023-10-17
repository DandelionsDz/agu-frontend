import { Box, Typography } from "@mui/material";
import CircleLogo from "../../components/CircleLogo";
const borderColor = "#e3e6e8";
const subTextColor = "#6a737c";
function HumanAnswer({ answer }) {
    return (
        <Box sx={{ marginY: "15px" }}>
            <Box
                width={"100%"}
                border={`1px solid ${borderColor}`}
                borderRadius={"5px"}
            >
                <Box sx={{ padding: "5px" }}>
                    <Typography>{answer.content}</Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                        paddingX: "5px",
                    }}
                >
                    <Typography
                        paddingX={"10px"}
                        fontSize={"12px"}
                        color={subTextColor}
                        textAlign={"right"}
                    >
                        answered Aug 2, 2008 at 18:22
                    </Typography>
                    <CircleLogo />
                </Box>
            </Box>
        </Box>
    );
}

export default HumanAnswer;
