import "./Index.css";

const ButtonLogin = ({ type, ...props }) => {
  return (
    <button className="button-login" type={type}>
      Login
    </button>
  );
};

export default ButtonLogin;
