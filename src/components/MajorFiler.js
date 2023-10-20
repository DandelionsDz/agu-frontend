import {
    Autocomplete,
    TextField,
    Box,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from "@mui/material";
import { useState } from "react";

function MajorFilter({ store }) {
    const handleChange = (event) => {
        store.setMajor(event.target.value);
    };

    return (
        <div>
            <Box padding={"10px"}>
                <FormControl sx={{ width: "100%" }}>
                    <InputLabel id="demo-simple-select-label">Major</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={store.data.major}
                        label="Major"
                        onChange={handleChange}
                    >
                        <MenuItem value="ksp">KHOA SƯ PHẠM</MenuItem>
                        <MenuItem value="knn">
                            KHOA NÔNG NGHIỆP - TÀI NGUYÊN THIÊN NHIÊN
                        </MenuItem>
                        <MenuItem value="kktkd">
                            KHOA KINH TẾ - QUẢN TRỊ KINH DOANH
                        </MenuItem>
                        <MenuItem value="kktcnmt">
                            KHOA KỸ THUẬT - CÔNG NGHỆ - MÔI TRƯỜNG
                        </MenuItem>
                        <MenuItem value="kcntt">
                            KHOA CÔNG NGHỆ THÔNG TIN
                        </MenuItem>
                        <MenuItem value="knn">KHOA NGOẠI NGỮ</MenuItem>
                        <MenuItem value="kl">
                            KHOA LUẬT VÀ KHOA HỌC CHÍNH TRỊ
                        </MenuItem>
                        <MenuItem value="kdl">
                            KHOA DU LỊCH VÀ VĂN HÓA NGHỆ THUẬT
                        </MenuItem>
                        <MenuItem value="gdtc">
                            BỘ MÔN GIÁO DỤC THỂ CHẤT
                        </MenuItem>
                        <MenuItem value="gdqp">
                            BỘ MÔN GIÁO DỤC QUỐC PHÒNG
                        </MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>
    );
}

export default MajorFilter;
