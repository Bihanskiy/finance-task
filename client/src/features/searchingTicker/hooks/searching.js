import { useDispatch, useSelector } from 'react-redux';

import { setTickerNameSearch } from '../../../store/reducers/tickersReducer';

import { getTickerNameSearch } from "../../../store/reducers/selectors/getPriceTickers/getTickersSelector";


export const useSetTickerNameSearch = () => {
    const dispatch = useDispatch();

    return (typedName) => {
        dispatch(setTickerNameSearch(typedName));
    }
}

export const useTickerNameSearch = () => {
    return useSelector(getTickerNameSearch);
}