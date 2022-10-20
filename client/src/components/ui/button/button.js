import "./button.scss";

const Button = ({ children, onClickHandler = () => { }, customStyle = " " }) => {

    return (
        <button
            className={`btn btn-${customStyle}`}
            onClick={onClickHandler}
        >
            {children}
        </button>
    )
}

export default Button;