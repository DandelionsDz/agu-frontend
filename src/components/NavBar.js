import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const gradient =
    "radial-gradient( circle farthest-corner at 10% 20%, rgba(255,200,124,1) 0%, rgba(252,251,121,1) 90% );";
function NavBar() {
    return (
        <AppBar position="sticky">
            <Toolbar sx={{ background: gradient }}>
                <AccountCircleIcon
                    fontSize="large"
                    sx={{ cursor: "pointer" }}
                />
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;
