import { Box } from "@mui/system";
import CustomButton from "../custom-button/CustomButton";
import MajorFilter from "../MajorFiler";
import TuneRoundedIcon from "@mui/icons-material/TuneRounded";
import Searcher from "./Searcher";
import useSearchQuery from "../../stores/panel/store";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { borderColor, subTextColor } from "../../utils/colors";
import { useState } from "react";

import { isMobile } from "react-device-detect";
import { Fade } from "@mui/material";
function Panel() {
    let filterStore = useSearchQuery();
    let [isExpanded, setIsExpanded] = useState(!isMobile);

    if (!isExpanded) {
        return (
            <Box
                onClick={() => setIsExpanded(true)}
                sx={{
                    cursor: "pointer",
                    paddingTop: "5px",
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    color: subTextColor,
                }}
            >
                Tools
                <ExpandMoreIcon />
            </Box>
        );
    }

    return (
        <Fade in={isExpanded}>
            {
                <Box
                    sx={{
                        border: `1px solid ${borderColor}`,
                        display: "flex",
                        flexDirection: "column",
                        paddingX: "10px",
                        display: "flex",
                        width: "100%",
                        height: "auto",
                        marginY: "15px",
                    }}
                >
                    <Box display={"flex"}>
                        <Box sx={{ width: { xs: "70%", sm: "50%" } }}>
                            <MajorFilter store={filterStore} />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                                width: { xs: "30%", sm: "70%" },
                            }}
                        >
                            <CustomButton height="auto">
                                <TuneRoundedIcon
                                    sx={{
                                        color: "white",
                                    }}
                                />
                            </CustomButton>
                        </Box>
                    </Box>

                    <Box
                        sx={{
                            cursor: "pointer",
                            padding: "8px 10px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Searcher />
                    </Box>
                </Box>
            }
        </Fade>
    );
}

export default Panel;
