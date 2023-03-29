import { createSlice } from '@reduxjs/toolkit';

interface initialStateProps {
    value: number;
}

const initialState: initialStateProps = {
    value: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        decremented: (state) => {
            state.value -= 1;
        },
        incremented: (state) => {
            state.value += 1;
        },
        decrementedByAmount: (state, action) => {
            state.value -= action.payload
        },
        incrementedByAmount: (state, action) => {
            state.value += action.payload
        }
    }
});

export default counterSlice.reducer;
export const { decremented, incremented, decrementedByAmount, incrementedByAmount } = counterSlice.actions;

