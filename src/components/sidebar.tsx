import { NavLink } from "react-router-dom";
import PieChart from "../assets/icons/pieChart.svg";
import AgentIcon from "../assets/icons/agent.svg";
import IdeaIcon from "../assets/icons/idea.svg";
import ticketIcon from "../assets/icons/ticket.svg";
import ContactIcon from "../assets/icons/contacts.svg";
import ArticleIcon from "../assets/icons/article.svg";
import SettingIcon from "../assets/icons/settings.svg";
import SubscriptionIcon from "../assets/icons/subscription.svg";

import "../styles/sidebar.scss";
import { useUserStore } from "../store/useStore";

const sidebarObj = [
  { path: "/overview", icon: PieChart, title: "Overview" },
  { path: "/tickets", icon: ticketIcon, title: "Tickets" },
  { path: "/ideas", icon: IdeaIcon, title: "Ideas" },
  { path: "/contacts", icon: ContactIcon, title: "Contacts" },
  { path: "/agents", icon: AgentIcon, title: "Agents" },
  { path: "/articles", icon: ArticleIcon, title: "Articles" },
];

const Sidebar = () => {
  const { logoutUser } = useUserStore();

  return (
    <div className="sidebar">
      {sidebarObj.map((item, key) => {
        return (
          <NavLink key={key} className="main_link" to={item.path}>
            <div className="link_cont">
              <span className="icon">
                <img src={item.icon} alt="" srcSet="" />
              </span>
              <p className="text">{item.title}</p>
            </div>
          </NavLink>
        );
      })}
      <div className="divider" />

      <div className="more_links">
        <NavLink className="main_link" to="/settings">
          <div className="link_cont">
            <span className="icon">
              <img src={SettingIcon} alt="" srcSet="" />
            </span>
            <p className="text">Settings</p>
          </div>
        </NavLink>
        <NavLink className="main_link" to="/subscription">
          <div className="link_cont">
            <span className="icon">
              <img src={SubscriptionIcon} alt="" srcSet="" />
            </span>
            <p className="text">Subscription</p>
          </div>
        </NavLink>

        <div
          className="main_link"
          style={{ cursor: "pointer" }}
          onClick={() => logoutUser()}
        >
          <div className="link_cont">
            <span className="icon">
              {/* <img src={LogoutIcon} alt="" srcSet="" /> */}
            </span>
            <p className="text">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
