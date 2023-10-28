import { Box, Typography } from "@mui/material";
import CircleLogo from "../../components/CircleLogo";
import HtmlContentViewer from "./HtmlContentViewer";
import { useState } from "react";
import { borderColor, subTextColor } from "../../utils/colors";
import ContinueReadingButton from "./CountinueReadingButton";
import { isMobile } from "react-device-detect";
const charaecterLimit = isMobile ? 500 : 1200;
function HumanAnswer({ answer }) {
    let [isExpanded, setIsExpanded] = useState(
        !(answer.content.length >= charaecterLimit * 1.2)
    );
    return (
        <Box sx={{ marginY: "15px" }}>
            <Box width={"100%"} borderBottom={`1px solid ${borderColor}`}>
                <Box sx={{ padding: "5px", position: "relative" }}>
                    <HtmlContentViewer
                        body={
                            isExpanded
                                ? answer.content
                                : answer.content.substr(0, charaecterLimit)
                        }
                    />
                    {!isExpanded && (
                        <Box
                            sx={{
                                background:
                                    "linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 100%);",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                width: "100%",
                                height: "70px",
                                position: "absolute",
                                bottom: "10px",
                            }}
                        >
                            <ContinueReadingButton
                                onClick={() => setIsExpanded(true)}
                            />
                        </Box>
                    )}
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
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
