import { createSlice } from '@reduxjs/toolkit'

const tickersSlice = createSlice({
    name: 'tickers',
    initialState: {
        priceTickers: [],
        selectedTickerId: "",
        tickerNameSearch: "",
        tickerDeleteId: "",
        timeInterval: 5
    },
    reducers: {
        setTickers: (state, action) => {
            state.priceTickers = action.payload;
        },
        setTickerId: (state, action) => {
            state.selectedTickerId = action.payload;
        },
        setTickerNameSearch: (state, action) => {
            state.tickerNameSearch = action.payload;
        },
        setTickerDeleteId: (state, action) => {
            state.tickerDeleteId = action.payload;
        },
        setTimeInterval: (state, action) => {
            state.timeInterval = action.payload;
        }
    }
})

export const { setTickers, setTickerId, setTickerNameSearch, setTickerDeleteId, setTimeInterval } = tickersSlice.actions;
export default tickersSlice.reducer;
