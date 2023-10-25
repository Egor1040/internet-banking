import { createSlice } from "@reduxjs/toolkit";
import data from '../data/data.json';

const customersCardsSlice = createSlice({
    name: 'customersCards',

    initialState: {
        customersCards: data.customerCards,
    },

    reducers: {
        recalcCardsBalance(state, action) {
            let cardFrom = state.customersCards.findIndex(el => el.number === action.payload.from);
            let cardTo = state.customersCards.findIndex(el => el.number === action.payload.to);

            state.customersCards[cardFrom].balance -= +action.payload.sum;
            state.customersCards[cardTo].balance += +action.payload.sum;
        },
    }
});

export const { recalcCardsBalance } = customersCardsSlice.actions;
export default customersCardsSlice.reducer;