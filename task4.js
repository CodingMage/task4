const computeMean = (arr) => {
    let result = arr.reduce((total, num) => total + num)
    return mean = result / arr.length;
}

function computeMedian(arr) {
    arryLength = arr.length
    arr.sort()

    if (arryLength % 2 === 0) {
        median = (arr[arryLength / 2 - 1] + arr[arryLength / 2]) / 2
    } else {
        median = arr[(arryLength - 1) / 2]
    }
    return median


}

const computeMode = (arr) => {

    let count = []
    let maxIndex = 0

    for (let i = 0; i < arr.length; i += 1) {
        let number = arr[i];
        count[number] = (count[number] || 0) + 1;
        if (count[number] > maxIndex) {
            maxIndex = count[number];
        }
    }

    for (i in count)
        if (count.hasOwnProperty(i)) {
            if (count[i] === maxIndex) {
                return modes = Number(i)
            }
        }

    return modes;
}
const compute = (arr) => {
    // let arr = [1, '3ab', 2, 'ef4', 'g3h', 5]
    let num = []
    let nonNum = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            num.push(arr[i])
        } else {
            nonNum.push(arr[i])
        }
    }

    let thenum = []

    for (let j = 0; j < nonNum.length; j++) {

        let test = nonNum[j].split('')
        for (let k = 0; k < test.length; k++) {
            if (Number(test[k]) - test[k] == 0) {
                thenum.push(Number(test[k]))
            }

        }
    }


    let extracted = num.concat(thenum)
    let filteredArray = extracted.sort(function (a, b) {
        return b - a
    })


    // calling the functions
    const mean = computeMean(filteredArray)
    const median = computeMedian(filteredArray)
    const mode = computeMode(filteredArray)
    return {
        filteredArray,
        mean,
        median,
        mode
    }


}

console.log(compute([1, '3ab', 2, 'ef4', 'g3h', 5]));