import { Box } from "@mui/system";
import CustomButton from "../custom-button/CustomButton";
import MajorFilter from "../MajorFiler";
import { Paper, Typography } from "@mui/material";
import { useState } from "react";
import CustomInput from "../custom-input/CustomInput";
import AskingPanel from "../asking-panel/AskingPanel";
import { Link } from "react-router-dom";
import Searcher from "./Searcher";
import useSearchQuery from "../../stores/panel/store";
function Panel() {
    let filterStore = useSearchQuery();
    return (
        <Paper
            elevation={2}
            sx={{
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
                    <CustomButton height="auto" padding="8px 10px">
                        <Link to="post-question">
                            <Typography color={"white"}>
                                Ask a question
                            </Typography>
                        </Link>
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
        </Paper>
    );
}

export default Panel;
