import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Error from "./Pages/error";
import Login from "./Pages/login";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/*" element={<Error/>}/>
        </Routes>
    );
};

export default AppRoutes;