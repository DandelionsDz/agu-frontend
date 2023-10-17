import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import "./App.css";
import { Outlet } from "react-router-dom";
function App() {
    return (
        <div className="App">
            <NavBar />
            <SideBar />
            <Outlet />
        </div>
    );
}

export default App;
