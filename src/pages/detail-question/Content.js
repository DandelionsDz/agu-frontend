import { Box, Typography } from "@mui/material";

const titleTextColor = "#3b4045";
const subTextColor = "#6a737c";
const borderColor = "#e3e6e8";

function Content({ title, content }) {
    return (
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
        </Box>
    );
}

export default Content;
