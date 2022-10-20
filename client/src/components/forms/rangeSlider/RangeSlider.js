import {
    memo,
    useState,
    useEffect,
} from 'react';

import './rangeSlider.scss';

const RangeSlider = memo(
    ({ classes, label, onChange, value, ...sliderProps }) => {
        const [sliderVal, setSliderVal] = useState(0);
        const [mouseState, setMouseState] = useState(null);

        useEffect(() => {
            setSliderVal(value);
        }, [value]);

        const changeCallback = (e) => {
            setSliderVal(e.target.value);
        };

        useEffect(() => {
            if (mouseState === 'up') {
                onChange(sliderVal);
            }
            // eslint-disable-next-line
        }, [mouseState]);

        return (
            <div className="range-slider">
                <div className='range-slider__title'>
                    <h3>{label}</h3>
                    <h3>{sliderVal} sec</h3>
                </div>
                <input
                    type="range"
                    value={sliderVal}
                    {...sliderProps}
                    className={`slider ${classes}`}
                    id="myRange"
                    onChange={changeCallback}
                    onMouseDown={() => setMouseState('down')}
                    onMouseUp={() => setMouseState('up')}
                />
            </div>
        );
    }
);

export default RangeSlider;