import { Typography } from "@mui/material";

function SolvingStatus({ isSolved }) {
    if (isSolved) {
        return (
            <Typography
                width={"8px"}
                height={"8px"}
                borderRadius={"50%"}
                sx={{ background: "#ffcc01" }}
            ></Typography>
        );
    }

    return (
        <Typography
            width={"8px"}
            height={"8px"}
            borderRadius={"50%"}
            sx={{ background: "#6a737c" }}
        ></Typography>
    );
}

export default SolvingStatus;
