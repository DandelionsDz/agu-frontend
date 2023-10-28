import { Empty } from "antd";
function Error() {
    return (
        <div style={{ padding: "10px" }}>
            <Empty description="Không thể lấy dữ liệu, vui lòng quay lại sau :(" />
        </div>
    );
}

export default Error;
