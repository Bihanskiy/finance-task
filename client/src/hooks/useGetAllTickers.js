import { useSelector } from 'react-redux';

import { getPriceTickers } from "../store/reducers/selectors/getPriceTickers/getTickersSelector";

export const useGetAllTickers = () => {
    return useSelector(getPriceTickers);
}