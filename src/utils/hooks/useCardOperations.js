import { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { addHistoryTransfer } from "../../store/historyCardSlice";
import { topUpMobile, transferBetweenCards } from "../../store/customersCardsSlice";

const useCardOperations = (initialData) => {
    const dispatch = useDispatch();
    const [dataForTransfer, setDataForTransfer] = useState(initialData);
    const [confirmOperation, setConfirmOperation] = useState(false);

    const [correctData, setCorrectData] = useState({
        identicalCard: false,
        negativeBalance: false,
        emptyAmount: false,
        emptyMobile: false,
    });

    const handleOperation = (action, customersCards) => (e) => {
        e.preventDefault();
        const { rechargeMobile, transferToCard } = {
            rechargeMobile: 'rechargeMobile',
            transferToCard: 'transferToCard',
        }
        const cardFrom = customersCards.find(el => el.number === dataForTransfer.from);

        if (action === rechargeMobile && dataForTransfer.to.length < 13) {
            setCorrectData(prev => ({ ...prev, emptyMobile: true }));
            return;
        }

        if (action === transferToCard && dataForTransfer.from === dataForTransfer.to) {
            setCorrectData(prev => ({ ...prev, identicalCard: true }));
            return;
        };

        if (!dataForTransfer.sum || dataForTransfer.sum.slice(0, 1) === '-') {
            setCorrectData(prev => ({ ...prev, emptyAmount: true }));
            return;
        };

        if (cardFrom.balance - dataForTransfer.sum < 0) {
            setCorrectData(prev => ({ ...prev, negativeBalance: true }));
            return;
        }

        dispatch(addHistoryTransfer(dataForTransfer));
        dispatch(
            action === transferToCard
                ? transferBetweenCards(dataForTransfer)
                : topUpMobile(dataForTransfer)
        );

        setDataForTransfer(prev => ({
            ...prev,
            to: action === rechargeMobile ? '' : prev.to,
            sum: ''
        }));

        setConfirmOperation(true);
        setCorrectData(prev => ({ ...prev, negativeBalance: false, identicalCard: false }));
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setConfirmOperation(false);
        }, 2000);

        return () => clearInterval(interval);
    }, [confirmOperation]);

    return {
        dataForTransfer,
        setDataForTransfer,
        correctData,
        setCorrectData,
        handleOperation,
        confirmOperation,
    };
}

export default useCardOperations;