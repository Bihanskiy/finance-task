
export const searchString = (searchIn, str) => {
    return searchIn.filter(item => item.ticker.toLowerCase().includes(str.toLowerCase()));
}