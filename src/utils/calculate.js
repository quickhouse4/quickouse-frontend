export const calculateTotalCashIn = (payments) => {
    let totalCashIn = 0;
    for (const payment of payments) {
        if (payment.type === 'CASHIN') {
            totalCashIn += payment.amount;
        }
    }
    return totalCashIn;
};


export const calculateTotalCashOut = (payments) => {
    let totalCashOut = 0;
    for (const payment of payments) {
        if (payment.type === 'CASHOUT') {
            totalCashOut += payment.amount;
        }
    }
    return totalCashOut;
};
