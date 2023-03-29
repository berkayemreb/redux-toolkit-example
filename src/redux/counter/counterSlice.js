import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        decremented: (state) => {
            state.value -= 1;
        },
        incremented: (state) => {
            state.value += 1;
        }
    }
});

export default counterSlice.reducer;
export const { decremented, incremented } = counterSlice.actions;

