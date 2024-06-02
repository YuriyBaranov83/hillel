import "./Index.css";

const LoginInput = ({ type, placeholder, children, ...props }) => {
  return (
    <label className="label-login">
      <input type={type} placeholder={placeholder} />
      {children}
    </label>
  );
};

export default LoginInput;
