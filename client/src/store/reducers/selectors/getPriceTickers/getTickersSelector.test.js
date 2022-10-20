import { getPriceTickers, getSelectedTickerId, getTickerNameSearch, getTickerDeleteId, getTimeInterval } from "./getTickersSelector";

describe('getTickersSelector', () => {
    test('work with empty priceTickers state', () => {
        expect(getPriceTickers({})).toStrictEqual([])
    })

    test('work with filled priceTickers state', () => {
        expect(getPriceTickers({
            tickers: {
                priceTickers: [{ ticker: "FB" }]
            }
        })).toStrictEqual([{ ticker: "FB" }])
    })

    test('work with empty selectedTickerId state', () => {
        expect(getSelectedTickerId({})).toBe("")
    })

    test('work with filled selectedTickerId state', () => {
        expect(getSelectedTickerId({
            tickers: {
                selectedTickerId: "FB"
            }
        })).toBe("FB")
    })

    test('work with empty getTickerNameSearch state', () => {
        expect(getTickerNameSearch({})).toBe("")
    })

    test('work with filled getTickerNameSearch state', () => {
        expect(getTickerNameSearch({
            tickers: {
                tickerNameSearch: "aacd"
            }
        })).toBe("aacd")
    })

    test('work with empty getTickerDeleteId state', () => {
        expect(getTickerDeleteId({})).toBe("")
    })

    test('work with filled getTickerDeleteId state', () => {
        expect(getTickerDeleteId({
            tickers: {
                tickerDeleteId: "FB"
            }
        })).toBe("FB")
    })

    test('work with empty getTimeInterval state', () => {
        expect(getTimeInterval({})).toBe(0)
    })

    test('work with filled getTimeInterval state', () => {
        expect(getTimeInterval({
            tickers: {
                timeInterval: 12
            }
        })).toBe(12)
    })
})

