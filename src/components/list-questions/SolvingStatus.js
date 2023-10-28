import { Typography } from "@mui/material";

function SolvingStatus({ isSolved }) {
    if (isSolved) {
        return (
            <Typography
                width={"8px"}
                height={"8px"}
                borderRadius={"50%"}
                sx={{ background: "#018aff" }}
            ></Typography>
        );
    }

    return (
        <Typography
            width={"8px"}
            height={"8px"}
            borderRadius={"50%"}
            sx={{ background: "#e3e6e8" }}
        ></Typography>
    );
}

export default SolvingStatus;
