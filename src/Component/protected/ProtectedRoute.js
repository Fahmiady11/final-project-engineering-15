import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    const isAuthenticated = localStorage.getItem("key");
    console.log("this", isAuthenticated);

    return (
        isAuthenticated ? <Outlet /> : <Navigate to="/loginpage" />

    );
}
export default ProtectedRoute;