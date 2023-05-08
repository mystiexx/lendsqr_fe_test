import React, { useState } from "react";
import styles from "./styles.module.scss";
import logo from "../../assets/login/logo.svg";
import pablo from "../../assets/login/pablo.svg";
import { useNavigate } from "react-router-dom";

interface FormValues {
  [key: string]: string;
}

const Login: React.FC = () => {
  const [show, setShow] = useState(false);
  const [values, setValues] = useState<FormValues>({});
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(values);
    localStorage.setItem("dummy", JSON.stringify(values));
    setTimeout(() => {
      navigate("/users");
    }, 1500);
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        {/* logo */}
        <img src={logo} alt="logo" />

        <img src={pablo} alt="pablo" />
      </div>

      <div className={styles.right}>
        <div className={styles.content}>
          <h3>Welcome!</h3>
          <h6>Enter details to login.</h6>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />
            <div className={styles.password_box}>
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                name="password"
                onChange={handleChange}
                required
              />
              {!show ? (
                <h4 onClick={() => setShow(!show)}>Show</h4>
              ) : (
                <h4 onClick={() => setShow(!show)}>hide</h4>
              )}
            </div>
            <p className={styles.forgot_password}>Forgot password?</p>

            <button type="submit">Log in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
