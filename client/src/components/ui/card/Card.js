
import "./card.scss";

const Card = ({
    children,
    name = "",
    price = "",
    percentChange = "",
    blockClassName = "",
    handlerOnClick = () => { },
}) => {
    return (
        <div className="card">
            <div
                className="card__wrapper"
                onClick={handlerOnClick}
            >
                <div className="card__name">
                    {name}
                </div>
                <div className="card__values">
                    <div className="card__price">
                        {price}
                    </div>
                    <div className={blockClassName}>
                        {percentChange}
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Card;