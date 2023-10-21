import { Box, Typography } from "@mui/material";
const subTextColor = "#6a737c";
function Tag({ tags }) {
    return (
        <Box>
            <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
                <Typography paddingRight={"5px"} color={subTextColor}>
                    tags:{" "}
                </Typography>
                {tags?.map((tag) => {
                    return (
                        <Typography
                            sx={{
                                display: "inline-block",
                                width: "fit-content",
                                background: "#E1ECF4",
                                color: "#39739D",
                                padding: "2px 5px",
                                marginY: "2px",
                                marginRight: "5px",
                                borderRadius: "5px",
                            }}
                        >
                            {tag}
                        </Typography>
                    );
                })}
            </Box>
        </Box>
    );
}

export default Tag;
