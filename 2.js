function sorter(arr) {
    return [...arr]
        .map((currentNumber) => currentNumber ** 2)
        .sort((lhs, rhs) => lhs - rhs)
}


const testcases = [
    [1, 2, 3, 5, 6, 8, 9],
    [-2, -1],
    [-10, -5, 0, 5, 10]
]

testcases.forEach((testcase, index) => {
    console.log(`Testcase #${index + 1}: ${testcase}, response: ${sorter(testcase)}`)
})