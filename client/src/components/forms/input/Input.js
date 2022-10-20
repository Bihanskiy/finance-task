import "./input.scss";

const Input = ({
    inputType = "text",
    inputCustomClass = "",
    inputValue = "",
    placeholderInput = "",
    inputOnChangeHandler = () => { },
}) => {

    return (
        <input
            type={inputType}
            className={`input input-${inputCustomClass}`}
            placeholder={placeholderInput}
            value={inputValue}
            onChange={(e) => inputOnChangeHandler(e.target.value)}
        />
    )
}

export default Input;
