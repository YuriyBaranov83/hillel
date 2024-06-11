import { useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import "./index.css";
import { ReactComponent as Logo } from "../../../../assets/login-logo.svg";
import LoginInput from "../../../../components/InputLogin";
import ButtonLogin from "../../../../components/ButtonLogin";

const Card = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <form className="form-login">
      <div className="row">
        <Logo />
      </div>
      <div className="row">
        <LoginInput type="text" placeholder="User Name" />
      </div>
      <div className="row">
        <LoginInput
          type={isVisible ? "text" : "password"}
          placeholder="Password"
        >
          {isVisible ? (
            <IoEyeOff onClick={handleClick} />
          ) : (
            <IoEye onClick={handleClick} />
          )}
        </LoginInput>
      </div>
      <div className="row">
        <ButtonLogin type="submit">Login</ButtonLogin>
      </div>
    </form>
  );
};

export default Card;
