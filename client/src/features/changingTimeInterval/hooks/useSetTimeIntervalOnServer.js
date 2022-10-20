import { useTickers } from "../../../hooks"

export const useSetTimeIntervalOnServer = () => {
    const { setTimeInterval } = useTickers();
    return (timeInterval) => {
        setTimeInterval(timeInterval);
    }
}