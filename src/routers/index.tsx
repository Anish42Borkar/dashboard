import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import Dashboard from "../pages/dashboard";
import Overview from "../pages/overview";
import Tickets from "../pages/tickets";
import { Private } from "./routeProtector";

const Routers = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<Private />}>
        <Route element={<Dashboard />}>
          <Route path="/" element={<Navigate to="/overview" />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="*" element={"Nothing found"} />
        </Route>
      </Route>
      <Route path="*" element={"Nothing found"} />
    </Routes>
  );
};

export default Routers;
