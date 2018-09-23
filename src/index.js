// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    if(currency <= 0) {
        return {};
    }

    if(currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    let H, Q, D, N, P;
    let amount = {};
    
    H = parseInt(currency / 50);
    currency = currency % 50;
    Q = parseInt(currency / 25);
    currency = currency % 25;
    D = parseInt(currency / 10);
    currency = currency % 10;
    N = parseInt(currency / 5);
    P = parseInt(currency % 5);

    if(H > 0) {
        amount["H"] = H;
    }

    if(Q > 0) {
        amount["Q"] = Q;
    }

    if(D > 0) {
        amount["D"] = D;
    }

    if(N > 0) {
        amount["N"] = N;
    }

    if(P > 0) {
        amount["P"] = P;
    }

    return amount;
}