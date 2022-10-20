export const getPriceTickers = state => state?.tickers?.priceTickers || [];
export const getSelectedTickerId = state => state?.tickers?.selectedTickerId || "";
export const getTickerNameSearch = state => state?.tickers?.tickerNameSearch || "";
export const getTickerDeleteId = state => state?.tickers?.tickerDeleteId || "";
export const getTimeInterval = state => state?.tickers?.timeInterval || 0;