const arr = [1, 2, 3, 4, 5, 6, 7]

//arrow functions
const doubleTheNumber = (num) => {
    return num * 2
}

const squareTheNumber = (num) => {
    return num ** 2
}

function mapManual(arr, fn){
    const result = []

    for(let i = 0; i < arr.length; i++){
        result.push(fn(arr[i]))
    }
    return result
}

// console.log(mapManual(arr, squareTheNumber))

//MAP FUNCTION

const doubled = arr.map((num, index) => index % 2 === 0 ? num * 2 : num ** 2)

console.log(doubled)
