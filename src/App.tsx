import "./App.css";
import Home from "./pages/Home.tsx";
import ArticlePage from "./pages/ArticlePage.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            {/* Routes */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/article/:filepath" element={<ArticlePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
