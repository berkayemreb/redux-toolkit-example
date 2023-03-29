import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decremented, incremented } from '../redux/counter/counterSlice';

const Counter = () => {

    const countValue = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <span>State'in değeri:</span> <span>{countValue}</span>
            </div>
            <div>
                <button onClick={() => dispatch(decremented())}>Decrement</button>
                <button onClick={() => dispatch(incremented())}>Increment</button>
            </div>

        </>

    )
}

export default Counter;