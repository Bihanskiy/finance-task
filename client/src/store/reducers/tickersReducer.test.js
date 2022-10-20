import tickersReducer, { setTickers, setTickerId, setTickerNameSearch, setTickerDeleteId, setTimeInterval } from "./tickersReducer";

describe('getTickersValue', () => {
    test('setTickers', () => {
        expect(tickersReducer({ priceTickers: [] }, setTickers([{ "ticker": "AAPL", "id": "AAPL", "exchange": "NASDAQ" }, { "ticker": "GOOGL", "id": "GOOGL", "exchange": "NASDAQ" }]))).toEqual({ priceTickers: [{ "ticker": "AAPL", "id": "AAPL", "exchange": "NASDAQ" }, { "ticker": "GOOGL", "id": "GOOGL", "exchange": "NASDAQ" }] })
    })

    test('setTickerId', () => {
        expect(tickersReducer({ selectedTickerId: "" }, setTickerId("AACD"))).toEqual({ selectedTickerId: "AACD" })
    })

    test('setTickerNameSearch', () => {
        expect(tickersReducer({ tickerNameSearch: "" }, setTickerNameSearch("asdfgf"))).toEqual({ tickerNameSearch: "asdfgf" })
    })

    test('setTickerDeleteId', () => {
        expect(tickersReducer({ tickerDeleteId: "" }, setTickerDeleteId("AACD"))).toEqual({ tickerDeleteId: "AACD" })
    })

    test('setTimeInterval', () => {
        expect(tickersReducer({ timeInterval: 0 }, setTimeInterval(15))).toEqual({ timeInterval: 15 })
    })

    test('with empty state', () => {
        expect(tickersReducer(undefined, setTickers([{ "ticker": "AAPL" }]))).toEqual({
            priceTickers: [{ "ticker": "AAPL" }],
            selectedTickerId: "",
            tickerNameSearch: "",
            tickerDeleteId: "",
            timeInterval: 5
        })
        expect(tickersReducer(undefined, setTickerId("AACD"))).toEqual({
            priceTickers: [],
            selectedTickerId: "AACD",
            tickerNameSearch: "",
            tickerDeleteId: "",
            timeInterval: 5
        })
        expect(tickersReducer(undefined, setTickerNameSearch("aaa"))).toEqual({
            priceTickers: [],
            selectedTickerId: "",
            tickerNameSearch: "aaa",
            tickerDeleteId: "",
            timeInterval: 5
        })
        expect(tickersReducer(undefined, setTickerDeleteId("AACD"))).toEqual({
            priceTickers: [],
            selectedTickerId: "",
            tickerNameSearch: "",
            tickerDeleteId: "AACD",
            timeInterval: 5
        })
        expect(tickersReducer(undefined, setTimeInterval(15))).toEqual({
            priceTickers: [],
            selectedTickerId: "",
            tickerNameSearch: "",
            tickerDeleteId: "",
            timeInterval: 15
        })
    })
})
