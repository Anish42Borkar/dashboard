import SearchIcon from "../assets/icons/search.svg";
import BellIcon from "../assets/icons/bell.svg";
import "../styles/titleBar.scss";
import { useLocation } from "react-router-dom";
import { useUserStore } from "../store/useStore";
import { useEffect, useState } from "react";
import axios from "../lib/axios";

type ResData = {
  data: Data;
  support: Support;
};

type Data = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

type Support = {
  url: string;
  text: string;
};

const TitleBar = () => {
  const location = useLocation();
  const { user } = useUserStore();
  const [userProfile, setUserProfile] = useState({
    name: "",
    avatar: "",
  });

  function fetchUserProfile() {
    axios
      .get<ResData>(`/users/${user?.id}`)
      .then((res) => {
        const data = {
          name: res.data?.data?.first_name,
          avatar: res.data?.data?.avatar,
        };
        setUserProfile(() => data);
      })
      .then((e) => {
        // alert("cannot fetch user profile");
      });
  }

  useEffect(() => {
    console.log("hi", user);
    fetchUserProfile();
  }, []);

  return (
    <div className="titleBar">
      <p className="title">{location.pathname.replace(`/`, "")}</p>
      <div className="right_side">
        <div className="icon_cont">
          <div className="icon">
            <img src={SearchIcon} alt="" srcSet="" />
          </div>
          <div className="icon">
            <img src={BellIcon} alt="" srcSet="" />
          </div>
        </div>
        <div className="divider"></div>
        <div className="user_details">
          <p className="name">{userProfile.name}</p>
          <div className="avatar">
            <img src={userProfile.avatar} alt="" srcSet="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
