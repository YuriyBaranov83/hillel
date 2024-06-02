import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import "./Index.css";
import { ReactComponent as Logo } from "../../../../assets/login-logo.svg";
import LoginInput from "../../../../components/InputLogin/Index";
import ButtonLogin from "../../../../components/ButtonLogin/Index";
import Row from "../../../../components/Row/Index";

const Card = () => {
  return (
    <form className="form-login">
      <Row>
        <Logo />
      </Row>
      <Row>
        <LoginInput type="text" placeholder="User Name"/>
      </Row>
      <Row>
        <LoginInput type="password" placeholder="Password">
          <IoEye className="eye-on" />
          <IoEyeOff className="eye-off" />
        </LoginInput>
      </Row>
      <Row>
        <ButtonLogin type="submit"/>
      </Row>
    </form>
  );
};

export default Card;
