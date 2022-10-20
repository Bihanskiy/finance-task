import { useEffect } from "react";
import { useTickers } from "../../../hooks";

import { SelectedTickerDetails, TickerSwiper, useSelectedTickerId, useDeleteTicker } from "../../../features/tickerInfo";

import { TimeInterval } from "../../../features/changingTimeInterval";

const TickerInfo = () => {

    const { addAllTickers, deleteTicker } = useTickers();

    const selectedTickerId = useSelectedTickerId();
    const { tickerDeleteId } = useDeleteTicker();

    useEffect(() => {
        addAllTickers();
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        deleteTicker(tickerDeleteId)
    // eslint-disable-next-line
    }, [tickerDeleteId])
    return (
        <section className="page-ticker ticker">
            <div className="container">
                <TimeInterval />
                <TickerSwiper />
                {selectedTickerId && selectedTickerId !== tickerDeleteId ? <SelectedTickerDetails /> : null}
            </div>
        </section>
    )
}

export default TickerInfo;