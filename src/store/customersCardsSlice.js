import { createSlice } from "@reduxjs/toolkit";
import data from '../data/data.json';

const customersCardsSlice = createSlice({
    name: 'customersCards',

    initialState: {
        customersCards: data.customerCards,
    },

    reducers: {
        transferBetweenCards(state, action) {
            let cardFrom = state.customersCards.findIndex(el => el.number === action.payload.from);
            let cardTo = state.customersCards.findIndex(el => el.number === action.payload.to);

            state.customersCards[cardFrom].balance -= +action.payload.sum;
            state.customersCards[cardTo].balance += +action.payload.sum;
        },

        topUpMobile(state, action) {
            let cardFrom = state.customersCards.findIndex(el => el.number === action.payload.from);

            state.customersCards[cardFrom].balance -= +action.payload.sum;
        },
    }
});

export const { transferBetweenCards, topUpMobile } = customersCardsSlice.actions;
export default customersCardsSlice.reducer;