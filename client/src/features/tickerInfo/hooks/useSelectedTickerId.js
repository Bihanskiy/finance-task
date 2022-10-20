import { useSelector } from 'react-redux';

import { getSelectedTickerId } from '../../../store/reducers/selectors/getPriceTickers/getTickersSelector';

export const useSelectedTickerId = () => {
    return useSelector(getSelectedTickerId);
}