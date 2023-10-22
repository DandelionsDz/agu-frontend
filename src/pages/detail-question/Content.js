import { Box, Typography } from "@mui/material";
import Tag from "../../components/asking-panel/Tag";
import HtmlContentViewer from "./HtmlContentViewer";
import { borderColor, subTextColor, titleTextColor } from "../../utils/colors";
function Content({ title, content, tags }) {
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

            <HtmlContentViewer body={content} />

            <Tag tags={tags} />
        </Box>
    );
}

export default Content;
