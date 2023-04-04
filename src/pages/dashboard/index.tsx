import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar";
import Logo from "../../assets/logo.svg";
import "../../styles/dashboard.scss";
import TitleBar from "../../components/titleBar";

const Dashboard = () => {
  return (
    <div className="dashbaord">
      <div className="">
        <div className="dashbaord_title">
          <div className="img_cont">
            <img className="dashbaord_img" src={Logo} alt="" />
          </div>
          <p className="dashbaord_header">Dashboard Kit</p>
        </div>

        <Sidebar />
      </div>
      <div className="outlet_cont">
        <TitleBar />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
