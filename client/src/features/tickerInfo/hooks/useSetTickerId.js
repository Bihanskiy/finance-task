import { useDispatch } from 'react-redux';
import { setTickerId } from '../../../store/reducers/tickersReducer';

export const useSetTickerId = () => {
    const dispatch = useDispatch();

    return (id) => {
        dispatch(setTickerId(id));
    }
}