import "./Index.css";

const Wrapper =({children, ...props})=>{
    return(
        <div className="wrapper">
            {children}
        </div>
    )
}

export default Wrapper;