import { Box } from "@mui/material";
import "./TagTyping.css";
import useDataStore from "../../stores/asking-panel/store";
import { Select } from "antd";

function TagTyping() {
    let dataStore = useDataStore();
    const onChange = (value) => {
        dataStore.setTags(value);
    };
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                padding: "15px 10px 10px 10px",
            }}
        >
            <Select
                dropdownStyle={{ display: "none" }}
                notFoundContent={null}
                onChange={onChange}
                mode="tags"
                style={{ width: "100%" }}
                placeholder="thêm tags như môn học, giáo viên..."
            />
        </Box>
    );
}

export default TagTyping;
