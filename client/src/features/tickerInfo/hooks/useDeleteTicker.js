import { useDispatch, useSelector } from 'react-redux';
import { setTickers, setTickerDeleteId } from '../../../store/reducers/tickersReducer';

import { getTickerDeleteId } from "../../../store/reducers/selectors/getPriceTickers/getTickersSelector";

import { useGetAllTickers } from '../../../hooks';

export const useDeleteTicker = () => {
    const dispatch = useDispatch();
    const allTickers = useGetAllTickers();

    const addTickerDeleteId = (id) => {
        dispatch(setTickerDeleteId(id));
    }

    const tickerDeleteId = useSelector(getTickerDeleteId);

    const deleteTicker = (id) => {
        addTickerDeleteId(id);
        const filteredWithoutId = allTickers.filter(ticker => ticker.ticker !== id);
        dispatch(setTickers(filteredWithoutId));
    }

    return { addTickerDeleteId, tickerDeleteId, deleteTicker }
}