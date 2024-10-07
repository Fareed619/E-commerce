import { useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/models/userAuth";
import googleIcon from "../../assets/google-icon-logo.svg";
const Login = ({ login }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    login(form, navigate);
  };

  const navigate = useNavigate();
  const handleBtnReigster = () => {
    navigate("/register");
  };
  return (
    <div className="all-login flex">
      <div
        style={{
          width: "80%",
        }}
      >
        <div className="login-container">
          <form className="form-login" onSubmit={onSubmit}>
            <h2 style={{ textAlign: "center", fontSize: "25px" }}>Login</h2>
            <input
              type="email"
              name="email"
              onChange={onChange}
              placeholder="Email address"
            />

            <input
              type="password"
              name="password"
              onChange={onChange}
              placeholder="Password"
            />

            <button>Login</button>
          </form>
          {/* <div className="google-logo">
            <img src={googleIcon} alt="" width="50px" height="50px" style={{cursor:"pointer"}}/>
          </div> */}
          <p style={{ marginLeft: "16%" }}>
            creat an accout?{" "}
            <button className="btn-account" onClick={handleBtnReigster}>
              Click Here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { login })(Login);
