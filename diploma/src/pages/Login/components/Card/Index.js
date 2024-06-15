import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import "./index.css";
import { ReactComponent as Logo } from "../../../../assets/login-logo.svg";
import Input from "../../../../components/Input";

const passwordLogin = {
  login: "admin",
  password: "1234",
};

const Card = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [textError, setTextError] = useState("");

  const handleClick = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const handleTextChange = (event) => {
    setTextInput(event.target.value);
    if (!event.target.value) {
      setTextError("Поле обов'язкове для заповнення");
    } else {
      setTextError("");
    }
  };

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
    if (!event.target.value) {
      setPasswordError("Поле обов'язкове для заповнення");
    } else {
      setPasswordError("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let hasError = false;

    if (!textInput) {
      setTextError("Поле обов'язкове для заповнення");
      hasError = true;
    } else if (textInput !== passwordLogin.login) {
      setTextError("Невірний логін");
      hasError = true;
    }

    if (!passwordInput) {
      setPasswordError("Поле обов'язкове для заповнення");
      hasError = true;
    } else if (passwordInput !== passwordLogin.password) {
      setPasswordError("Невірний пароль");
      hasError = true;
    }

    if (!hasError) {
      const myToken = "my-token";
      localStorage.setItem("token", myToken);
    }
  };

  return (
    <form className="form-login" onSubmit={handleSubmit}>
      <div className="row">
        <Logo />
      </div>
      <div className="row">
        <Input
          type="text"
          placeholder="User Name"
          value={textInput}
          onChange={handleTextChange}
          autoComplete="username"
          className={`${textError && "error-input"}`}
        />
        {textError && <span className="error">{textError}</span>}
      </div>
      <div className="row">
        <Input
          type={isVisible ? "text" : "password"}
          placeholder="Password"
          value={passwordInput}
          onChange={handlePasswordChange}
          autoComplete="current-password"
          className={`${passwordError && "error-input"}`}
        >
          {isVisible ? (
            <IoEyeOff onClick={handleClick} />
          ) : (
            <IoEye onClick={handleClick} />
          )}
        </Input>
        {passwordError && <span className="error">{passwordError}</span>}
      </div>
      <div className="row">
        <Input type="submit" value="Login" className="form-button"/>
      </div>
    </form>
  );
};

export default Card;
