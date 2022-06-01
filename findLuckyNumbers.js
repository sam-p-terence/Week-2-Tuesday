// Write your code below this line.

function luckyNumbers(n) {

    const numArr = []
    while (numArr.length < n) {
        let num = Math.floor(Math.random() * 10) + 1
        if (!numArr.includes(num)) {
            numArr.push(num)
        }
    }
    return numArr
}
console.log(luckyNumbers(9))