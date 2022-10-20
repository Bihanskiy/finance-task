import { useSelector } from "react-redux";
import { getTimeInterval } from "../../../store/reducers/selectors/getPriceTickers/getTickersSelector";


export const useTimeInterval = () => {
    return useSelector(getTimeInterval);
}