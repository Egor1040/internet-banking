import { createSlice } from "@reduxjs/toolkit";

const historyCardSlice = createSlice({
    name: 'historyCard',

    initialState: {
        historyCards: [],
    },

    reducers: {
        addHistoryTransfer(state, action) {
            state.historyCards.push({
                from: action.payload.from,
                to: action.payload.to,
                sum: action.payload.sum,
            });
        },
    }
});

export const { addHistoryTransfer } = historyCardSlice.actions;
export default historyCardSlice.reducer;