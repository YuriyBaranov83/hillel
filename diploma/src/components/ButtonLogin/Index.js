import "./Index.css";

const ButtonLogin = ({ type, children, ...props }) => {
  return (
    <button className="button-login" type={type}>
      {children}
    </button>
  );
};

export default ButtonLogin;
