import "./App.css";
import Home from "./pages/Home.tsx";
import ArticlePage from "./pages/ArticlePage.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
function App() {
    useEffect(() => {
        const redirect = sessionStorage.redirect;
        delete sessionStorage.redirect;

        if (redirect && redirect !== window.location.pathname) {
            window.history.replaceState(null, "", redirect);
        }
    }, []);
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/article/:filepath" element={<ArticlePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
