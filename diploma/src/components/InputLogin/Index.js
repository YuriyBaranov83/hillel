import "./index.css";

const LoginInput = ({ type, placeholder, children,  }) => {
 

  return (
    <label className="label-login">
      <input type={type} placeholder={placeholder} />
      {children}
    </label>
  );
};

export default LoginInput;
