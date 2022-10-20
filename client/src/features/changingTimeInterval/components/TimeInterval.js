import { useCallback, useEffect, useMemo } from "react";
import { useSetTimeInterval } from "../hooks/useSetTimeInterval";
import { useTimeInterval } from "../hooks/getTimeInterval";
import { useSetTimeIntervalOnServer } from "../hooks/useSetTimeIntervalOnServer";

import { RangeSlider } from "../../../components/forms";

import "./timeInterval.scss";

function TimeInterval() {
    const timeInterval = useTimeInterval();
    const setTimeInterval = useSetTimeInterval();

    const setTimeIntervalOnServer = useSetTimeIntervalOnServer();
    useEffect(() => {
        setTimeIntervalOnServer(timeInterval);
        // eslint-disable-next-line
    }, [timeInterval])

    // eslint-disable-next-line
    const sliderValueChanged = useCallback((val) => {
        setTimeInterval(val);
    });

    const sliderProps = useMemo(
        () => ({
            min: 1,
            max: 15,
            value: timeInterval,
            step: 1,
            label: 'Set time interval: ',
            onChange: (e) => sliderValueChanged(e),
        }),
    // eslint-disable-next-line
        [timeInterval]
    );


    return (
        <RangeSlider {...sliderProps} classes="range-slider__item" />
    );
}

export default TimeInterval;
