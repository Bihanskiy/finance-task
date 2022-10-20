import { useMemo } from "react";

import { Card } from "../../../components/ui";
import { Button } from "../../../components/ui";

import { useDeleteTicker } from "../hooks/useDeleteTicker";
import { useSetTickerNameSearch, useTickerNameSearch } from "../../searchingTicker";

import { useGetAllTickers } from "../../../hooks";
import { useSetTickerId } from "../hooks/useSetTickerId";

import SwiperContainer from "../../../lib/Swiper";
import { SwiperSlide } from 'swiper/react';
import classNames from 'classnames';

import { compareNumeric, operatorsWithNum, searchString } from "../../../utils/index";

const TickerSwiper = () => {

    const setTickerNameSearch = useSetTickerNameSearch();
    const tickerNameSearch = useTickerNameSearch();

    const allTickers = useGetAllTickers();
    const setTickerId = useSetTickerId();

    const {deleteTicker} = useDeleteTicker();

    const filteredTickers = useMemo(() => {
        return searchString(allTickers, tickerNameSearch);
    }, [tickerNameSearch, allTickers])

    const getTickerDetails = (id) => {
        setTickerId(id);
        setTickerNameSearch("");
    }

    const getTickerDeleteId = (id) => {
        deleteTicker(id);
    }

    const renderTickers = (arr) => {
        if (arr.length === 0) return null;


        return arr.map(ticker => {
            const tickerChangeCompare = compareNumeric(+ticker.change, 0);

            const blockClassName = classNames({
                "card__percent-change": true,
                'green-block': +tickerChangeCompare === 1,
                'red-block': +tickerChangeCompare === -1,
                'grey-block': +tickerChangeCompare === 0,
            });

            return (
                <SwiperSlide key={ticker.id}>
                    <Card
                        name={ticker.ticker}
                        price={`${ticker.price} $`}
                        percentChange={operatorsWithNum(tickerChangeCompare, ticker.change_percent)}
                        blockClassName={blockClassName}
                        handlerOnClick={() => getTickerDetails(ticker.id)} >
                        <Button
                            onClickHandler={() => getTickerDeleteId(ticker.id)}
                            customStyle={'close'}
                        >
                            <i className="icon icon-cross" />
                        </Button>
                    </Card>
                </SwiperSlide>
            )
        })
    }

    const tickers = renderTickers(filteredTickers)

    return (
        <SwiperContainer>
            {tickers}
        </SwiperContainer>
    )
}

export default TickerSwiper;