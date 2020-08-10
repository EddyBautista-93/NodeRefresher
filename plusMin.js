function plusMinus(arr) {
    //          +, -, 0
    let count = [0, 0, 0]
    arr.forEach(num => {
        if (num > 0) count[0] += 1
        else if (num < 0) count[1] += 1
        else count[2] += 1
    })
    count.forEach(num => console.log((num / arr.length).toFixed(6)))
    return
}