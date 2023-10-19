import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SolvingStatus from "./SolvingStatus";
const subTextColor = "#6a737c";
const titleTextColor = "#0074CC";
const subContentLimit = 200;
function Question({ title, content, isSolved, answers, views, id }) {
    let subsContent = content.substring(0, subContentLimit) + "...";
    return (
        <>
            <Box
                sx={{
                    marginY: "10px",
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    width: "100%",
                    padding: "5px",
                    border: "1px solid #ccc",
                }}
            >
                <Box
                    sx={{
                        width: { xs: "100%", sm: "30%" },
                        display: "flex",
                        flexDirection: { sm: "row", md: "column" },
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <SolvingStatus isSolved={isSolved} />
                    <Typography color={subTextColor} paddingX={"8px"}>
                        {" "}
                        {answers.length} answers
                    </Typography>
                    <Typography color={subTextColor}>{views} views</Typography>
                </Box>
                <Box
                    sx={{
                        width: { xs: "100%", sm: "70%" },
                        paddingLeft: "10px",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Link
                        to={`detail-question/${id}`}
                        state={{ title, content, isSolved, answers, views, id }}
                    >
                        <Typography
                            sx={{ cursor: "pointer" }}
                            fontSize={"17px"}
                            color={titleTextColor}
                        >
                            {title}
                        </Typography>
                    </Link>
                    <Typography fontSize={"13px"}>{subsContent}</Typography>
                    <Box sx={{ display: "flex", width: "100%" }}>
                        <Box sx={{ width: "100%" }}>
                            <Typography
                                sx={{
                                    height: "100%",
                                    color: "#6A737C",
                                    fontSize: "12px",
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                }}
                            >
                                asked 1 min ago
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default Question;
