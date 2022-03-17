function coin_arranger(arr) {
    const sortedCoins = arr.sort((lhs, rhs) => lhs - rhs);
    let minUnreacheableValue = 0;
    sortedCoins.forEach(coin => {
        const nextPossibleNonReacheableValue = minUnreacheableValue + 1;
        if (coin > nextPossibleNonReacheableValue)
            return coin + 1;
        minUnreacheableValue += coin;
    });

    return minUnreacheableValue + 1;
}
const testcases = [
    [5, 7, 1, 1, 2, 3, 22],
    [1, 1, 1, 1, 1],
    [1, 5, 1, 1, 1, 10, 15, 20, 100],
    [1, 2, 3],
    [3, 2, 1],
    [3, 3, 13]
]


testcases.forEach((testcase, i) => {
    console.log(`Testcase #${i}: [${testcase}], response: ${coin_arranger(testcase)}`)
})