import { Box } from "@mui/material";
import { Select as Selector } from "antd";
function MajorFilter({ store }) {
    const handleChange = (value) => {
        store.setMajor(value);
    };

    return (
        <div>
            <Box padding={"10px"}>
                <Selector
                    onChange={handleChange}
                    defaultValue="ksp"
                    style={{ width: "100%", textAlign: "center" }}
                    options={[
                        { value: "ksp", label: "Khoa Sư Phạm" },
                        {
                            value: "knntntn",
                            label: "Khoa Nông Nghiệp - Tài Nguyên Thiên Nhiên",
                        },
                        {
                            value: "kktkd",
                            label: "Khoa Kinh Tế - Quản Trị Kinh Doanh",
                        },
                        {
                            value: "kktcnmt",
                            label: "Khoa Kỹ Thuật - Công Nghệ - Môi Trường",
                        },
                        {
                            value: "kcntt",
                            label: "Khoa Công Nghệ Thông Tin",
                        },
                        {
                            value: "knn",
                            label: "Khoa Ngoại Ngữ",
                        },
                        {
                            value: "kl",
                            label: "Khoa Luật và Khoa Học Chính Trị",
                        },
                        {
                            value: "kdl",
                            label: "Khoa Du Lịch Và Văn Hóa Nghệ Thuật",
                        },
                    ]}
                />
            </Box>
        </div>
    );
}

export default MajorFilter;
