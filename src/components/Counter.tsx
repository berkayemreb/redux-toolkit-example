import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decremented, incremented, decrementedByAmount, incrementedByAmount } from '../redux/counter/counterSlice';
import { AppDispatch, RootState } from "../redux/store";

const Counter: React.FC = () => {

    const countValue: number = useSelector((state: RootState) => state.counter.value);
    const dispatch: AppDispatch = useDispatch();
    const [amount, setAmount] = useState<number>(3)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(event.target.value));
    };

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
                <input type="number" value={amount} onChange={handleChange} />
                <button onClick={() => dispatch(decrementedByAmount(amount))}>Decrement By Amount</button>
                <button onClick={() => dispatch(incrementedByAmount(amount))}>Increment By Amount</button>
            </div>

        </>

    )
}

export default Counter;

