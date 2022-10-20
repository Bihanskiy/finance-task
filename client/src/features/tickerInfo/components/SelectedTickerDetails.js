import { useEffect, useState } from "react";
import classNames from "classnames";

import { useGetAllTickers } from "../../../hooks";

import { useSelectedTickerId } from "../hooks/useSelectedTickerId";

import { compareNumeric } from "../../../utils";

import "./selectedTickerDetails.scss";

const SelectedTickerDetails = () => {

    const [findTicker, setFindTicker] = useState({});

    const allTickers = useGetAllTickers();
    const selectedTickerId = useSelectedTickerId();

    useEffect(() => {
        const ticker = allTickers.find(ticker => ticker.id === selectedTickerId);
        setFindTicker({...ticker});
    }, [selectedTickerId, allTickers])

    const { ticker,
        exchange,
        price,
        change,
        change_percent,
        dividend,
        yield: tickerYield,
        last_trade_time
    } = findTicker

    const tickerChangeCompare = compareNumeric(+change, 0);

    const blockClassName = classNames({
        "ticker-info__percent": true,
        'green-block icon-arrow-up': +tickerChangeCompare === 1,
        'red-block icon-arrow-down': +tickerChangeCompare === -1,
        'grey-block': +tickerChangeCompare === 0,
    });

    return (
        <div className="ticker-info">
            <div className="ticker-info__pricing">
                <h2 className="ticker-info__name">{ticker}</h2>
                <div className="ticker-info__price">{price} $</div>
                <div className={blockClassName}>{change_percent} %</div>
                <div className="ticker-info__currency-change">{change} $ <span>За сьогодні</span></div>
                <div className="ticker-info__time">{last_trade_time}</div>
            </div>
            <div className="ticker-info__about">
                <div className="ticker-info__exchange">
                    <p>Біржа: <span>{exchange}</span></p>
                </div>
                <div className="ticker-info__dividend">
                    <p>Дивідент: <span>{dividend}</span></p>
                </div>
                <div className="ticker-info__yield">
                    <p>Дебіт: <span>{tickerYield}</span></p>
                </div>
            </div>
        </div>
    )
}

export default SelectedTickerDetails;