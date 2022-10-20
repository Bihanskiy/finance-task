import { useDispatch } from "react-redux";
import { setTimeInterval } from "../../../store/reducers/tickersReducer";

export const useSetTimeInterval = () => {
    const dispatch = useDispatch();
    return (timeInterval) => {
        dispatch(setTimeInterval(timeInterval))
    }
}