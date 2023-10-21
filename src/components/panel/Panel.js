import { Box } from "@mui/system";
import CustomButton from "../custom-button/CustomButton";
import MajorFilter from "../MajorFiler";
import { Paper, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import EditNoteIcon from "@mui/icons-material/EditNote";
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
                    <CustomButton height="auto">
                        <Link
                            style={{ display: "flex", padding: "8px 5px" }}
                            to="post-question"
                        >
                            <Typography color={"white"}>Ask</Typography>
                            <EditNoteIcon
                                sx={{
                                    margin: "0px 0px 0px 5px",
                                    color: "white",
                                }}
                            />
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
