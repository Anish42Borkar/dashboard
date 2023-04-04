import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import EyeIcom from "../../assets/active.svg";
import Logo from "../../assets/logo.svg";
import axios from "../../lib/axios";
import { useUserStore } from "../../store/useStore";
import "../../styles/login.scss";
import { debounce } from "../../util/debounce";

type ReqData = {
  email: string;
  password: string;
};

type ResDataType = {
  id: number;
  token: string;
};

const Login = () => {
  const { setUser } = useUserStore();
  const navigate = useNavigate();

  const [data, setData] = useState<ReqData>({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  });

  async function onSubmit() {
    if (isLoading) return;
    if (data.email === "" || data.password === "") {
      alert("please fill Email and Password ");
      return;
    }
    setIsLoading((prev) => !prev);

    axios
      .post<ResDataType>("/register", data)
      .then((res) => {
        setUser(res.data);
        navigate("/overview", { replace: true });
        setIsLoading((prev) => !prev);
      })
      .catch((res) => {
        setIsLoading((prev) => !prev);
        if (res?.response?.data.hasOwnProperty("error")) {
          alert(res.response.data.error);
        } else {
          alert("somethig went wrong");
        }
      });
  }

  return (
    <div className="container">
      <div className="login">
        <img className="logo_img" src={Logo} alt="" />

        <p className="header_text">Dashboard Kit</p>
        <p className="header_text_bold">Log In to Dashboard Kit</p>
        <p className="tag">Enter your email and password below</p>

        <div className="textfield_email common_textfield_property">
          <p className="textfield_label">email</p>
          <div className="textfield_cont">
            <input
              className="input"
              name="email"
              placeholder="Email address"
              type="text"
              onChange={onChange}
            />
          </div>
        </div>

        <div className="textfield_password common_textfield_property">
          <img className="eye_icon" src={EyeIcom} alt="" />
          <div className="forget_pass_cont">
            <p className="textfield_label">Password</p>
            <p className="forgot_pass">Forgot password?</p>
          </div>

          <div className="textfield_cont">
            <input
              className="input"
              name="password"
              placeholder="Password"
              type="password"
              onChange={onChange}
            />
          </div>
        </div>
        <div className="btn_login" onClick={() => onSubmit()}>
          {" "}
          <span className="btn_text">
            {isLoading ? "Wait..." : "Log In"}
          </span>{" "}
        </div>

        <div className="account">
          <p className="text">
            Don’t have an account?<span className="btn">Sign up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
