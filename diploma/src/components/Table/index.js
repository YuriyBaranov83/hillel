import "./index.css";

const Table = (props) => {
  return (
    <table className={props.classNameCustom}>
      {props.children}
    </table>
  );
};
export default Table;