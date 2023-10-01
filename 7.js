function countSandwiches(bread, cheese) {
    let half_bread = bread / 2
    if (half_bread <= cheese) {
        return Math.floor(half_bread)
    } else {
        return cheese
    }   
}
console.log(countSandwiches(5,6))

function generateMultiplicationTable(x) {
    let table = ""
    let arr = []
    let moddedArr = []
    for (let i = 1; i <= x; i++) {
        arr.push(i)
        moddedArr.push(i)
    }
    moddedArr.unshift(1)
    table += ' ';
    for (let i = 1; i <= arr.length; i++) {
        table += '   ' + i;
    }
    table += '\n'
    for (let i = 1; i <= arr.length; i++) {
        moddedArr.forEach(element => {
            n = i * element
            space = 4 - (''+n).length 
            table +=  i * element + ' '.repeat(space)
        });
        table += '\n'
    }
    return table
}
console.log(generateMultiplicationTable(5))

function showQuote(arr, symbol) {
    let maxLen = arr.reduce((a,b) => a > b.length ? a : b.length, 0)
    let quote = (''+symbol).repeat(maxLen+4) + '\n'
    arr.forEach(element => {
        quote += symbol + ' ' + element + ' '.repeat(maxLen - element.length) + ' ' + symbol + '\n'
    });
    quote += (''+symbol).repeat(maxLen+4)
    return quote
}
console.log(showQuote(['Hello', 'World', 'In', 'JS'], '*'))


function combineArrays(arr1, arr2) {
    let result = []
    let maxLen = Math.max(arr1.length, arr2.length) 

    for (let i = 0; i <= maxLen; i++) {
        if (arr1[i])  {
            result.push(arr1[i])
        }
        if (arr2[i])  {
            result.push(arr2[i])
        }
    }
    return result
}
console.log(combineArrays([1, 2, 3], ['a', 'b', 'c', 'd']))

function countUniqueValues(arr) {
    result = {}
    arr.forEach(element => {
        if (!result[element]) {
            result[element] = 1
        } else {
            result[element] = result[element]+1
        }
    });
    return result
}
console.log(countUniqueValues([1,2,1,2,3,4,2,5]))