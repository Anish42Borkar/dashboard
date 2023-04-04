import { Navigate, Outlet } from "react-router-dom";
import { useUserStore } from "../store/useStore";

export const Private = () => {
  const { user } = useUserStore();

  if (user) return <Outlet />;
  return <Navigate to="/login" replace />;
};
