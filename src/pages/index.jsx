import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./home"));
const TermsPage = lazy(() => import("./terms"));


export function Routing() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/terms" element={<TermsPage />} />
        </Routes>
    );
}