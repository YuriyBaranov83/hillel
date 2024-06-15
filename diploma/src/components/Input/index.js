import "./index.css";

const Input = ({
  type,
  placeholder,
  children,
  value,
  onChange,
  autoComplete,
  className,
}) => {
  return (
    <label className="label-login">
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
      />
      {children}
    </label>
  );
};

export default Input;
