import { Box, Typography } from "@mui/material";
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
                    <Typography
                        width={"6px"}
                        height={"6px"}
                        borderRadius={"50%"}
                        sx={{ background: "#ffcc01" }}
                    ></Typography>
                    <Typography
                        width={"6px"}
                        height={"6px"}
                        borderRadius={"50%"}
                        sx={{ background: "#6a737c" }}
                    ></Typography>
                    <Typography
                        width={"6px"}
                        height={"6px"}
                        borderRadius={"50%"}
                        sx={{ background: "#e3e6e8" }}
                    ></Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default HumanAnswer;
