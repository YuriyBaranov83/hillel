import "./Index.css";
import ListItem from "../ListItem/Index";

const List = () => {
  return <ul className="header-list">
    <ListItem><span>list-item-1</span></ListItem>
    <ListItem><span>list-item-2</span></ListItem>
    <ListItem><span>list-item-3</span></ListItem>
    <ListItem><span>list-item-4</span></ListItem>
    <ListItem><span>list-item-5</span></ListItem>
  </ul>;
};

export default List;
