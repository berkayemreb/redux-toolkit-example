import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decremented, incremented, decrementedByAmount, incrementedByAmount } from '../redux/counter/counterSlice';

const Counter = () => {

    const countValue = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(3);

    return (
        <>
            <div>
                <span>State'in değeri:</span> <span>{countValue}</span>
            </div>
            <div>
                <button onClick={() => dispatch(decremented())}>Decrement</button>
                <button onClick={() => dispatch(incremented())}>Increment</button>
            </div>
            <div>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <button onClick={() => dispatch(decrementedByAmount(amount))}>Decrement By Amount</button>
                <button onClick={() => dispatch(incrementedByAmount(amount))}>Increment By Amount</button>
            </div>

        </>

    )
}

export default Counter;