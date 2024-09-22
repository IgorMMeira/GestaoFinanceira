import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../login/login";
import { AboutMe } from "../sobre/aboutMe";
import App from "../App";
import { Home } from "../home/home";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />

                {/* Define a rota inicial como a página de login */}
                <Route path="/login" element={<Login />} />

                {/* Define a rota para a página "Sobre" */}
                <Route path="/sobre" element={<AboutMe />} />

                {/* Define a rota para a página "Home" */}
                <Route path="/home" element={<Home />} />

                {/* Define a rota para a página principal do aplicativo */}
                <Route path="/dashboard" element={<App />} />
            </Routes>
        </BrowserRouter>
    );
}
