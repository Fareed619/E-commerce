import "./register.css";
import { connect } from "react-redux";
import { register } from "../../redux/models/userAuth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../../assets/google-icon-logo.svg";


const Register = ({ register }) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    register(form, navigate);
  };

  return (
    <div>
      <div className="flex register-bg">
        <div className="register-div" >
          <div className="login-container" style={{ paddingBottom: "30px" }}>
            <form className="form-login" onSubmit={onSubmit}>
              <h2>
                Register
              </h2>
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={onChange}
              />

              <input
                type="email"
                placeholder="Email address"
                name="email"
                onChange={onChange}
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={onChange}
              />

              <button className="register-btn">Register</button>
            </form>

            {/* <div className="google-logo">
              <img src={googleIcon} alt="" width="50px" height="50px" />
            </div> */}

            <p style={{ marginLeft: "16%" }}>
            Already have an account?{" "}
            <Link to="/login" className="btn-account">
              Click Here
            </Link>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { register })(Register);
