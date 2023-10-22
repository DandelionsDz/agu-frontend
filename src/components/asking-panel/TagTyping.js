import { Box } from "@mui/material";
import { Chips } from "primereact/chips";
import "./TagTyping.css";
import { useState } from "react";
import useDataStore from "../../stores/asking-panel/store";

function TagTyping() {
    let dataStore = useDataStore();
    let [label, setLabel] = useState("thêm tag như môn học, giáo viên...");
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
                padding: "15px 10px 10px 10px",
            }}
        >
            <span style={{ width: "100%" }} className="p-float-label">
                <Chips
                    style={{ width: "100%", margin: "4px 0px" }}
                    id="tags"
                    value={dataStore.data.tags}
                    onChange={(e) => dataStore.setTags(e.value)}
                    onFocus={() => setLabel("tags")}
                    onBlur={(e) =>
                        dataStore.data.tags.length === 0 &&
                        setLabel("thêm tag như môn học, giáo viên...")
                    }
                />
                <label htmlFor="tags"></label>
            </span>
        </Box>
    );
}

export default TagTyping;
