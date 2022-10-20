import { useDispatch } from 'react-redux';

import { setTickers } from '../store/reducers/tickersReducer';

import io from "socket.io-client";

const SERVER_URL = 'http://localhost:4000'

const socket = io.connect(SERVER_URL);

export const useTickers = () => {
    const dispatch = useDispatch();

    const addAllTickers = () => {
        socket.emit('start');

        socket.on('ticker', (data) => {
            dispatch(setTickers(data));
        });
    }

    const deleteTicker = (tickerDeleteId) => {
        socket.emit("delete_ticker_id", { tickerDeleteId });
    }

    const setTimeInterval = (timeInterval) => {
        socket.emit("set_time_interval", { timeInterval });
    }
    return { addAllTickers, deleteTicker, setTimeInterval }
} 