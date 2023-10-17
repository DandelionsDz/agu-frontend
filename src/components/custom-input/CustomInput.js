import SearchIcon from '@mui/icons-material/Search';
import "./CustomInput.css";
import { Box } from '@mui/material';
function CustomInput() {
    return (
        <div className="custom-input-container">
            <SearchIcon sx={{ color: 'rgb(0, 127, 255);' }} />
            <input className="custom-input" type="text" placeholder="Search for content" />
        </div>
    );
}

export default CustomInput;