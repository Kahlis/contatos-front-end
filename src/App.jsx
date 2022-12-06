/* eslint-disable react-hooks/exhaustive-deps */
import { GlobalStyle } from "./styles/global";
import { Routes, Route /*, useNavigate*/ } from "react-router-dom";
import Error404 from "./Pages/Error404";
import Home from "./Pages/Home";
import "./styles/fonts.css";
import { useEffect, useState } from "react";

function App() {
    const [userData] /*, setUserData]*/ = useState({});
    //const navigate = useNavigate();

    useEffect(() => {
        /*
        if (localStorage.getItem("userData")) {
            setUserData(JSON.parse(localStorage.getItem("userData")));
            navigate("/home");
        }
        */
    }, []);

    return (
        <>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home userData={userData} />} />
                <Route path="/*" element={<Error404 />} />
            </Routes>
        </>
    );
}

export default App;
