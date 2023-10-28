import { Button } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function ContinueReadingButton({ onClick }) {
    return (
        <Button
            onClick={onClick}
            sx={{
                background: "#f7f7f8",
                textTransform: "none",
                padding: "5px 10px",
                borderRadius: "20px",
                border: "1px solid #ccc",
                color: "#636466",
                fontSize: "11px",
            }}
        >
            Read More <ExpandMoreIcon />
        </Button>
    );
}

export default ContinueReadingButton;
