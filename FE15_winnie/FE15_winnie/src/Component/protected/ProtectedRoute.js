import { Navigate, Outlet, Route } from 'react-router-dom';
import { STORAGE_KEY } from '../store/AuthStore';


function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem(STORAGE_KEY);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

function ProtectedLogin() {
  const isAuthenticated = localStorage.getItem(STORAGE_KEY);
  if (window.location.pathname !== "/login" && !isAuthenticated) {
    return <Navigate to="/login" />
  } else if (window.location.pathname === "/login" && isAuthenticated) {
    return <Navigate to="/" />
  }
  return <Outlet />

}
function ProtectedRegister() {
  const isAuthenticated = localStorage.getItem(STORAGE_KEY);
  if (window.location.pathname !== "/register" && !isAuthenticated) {
    return <Navigate to="/register" />
  } else if (window.location.pathname === "/register" && isAuthenticated) {
    return <Navigate to="/" />
  }
  return <Outlet />
}


export { ProtectedRoute, ProtectedLogin, ProtectedRegister };
