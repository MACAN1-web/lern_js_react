const words = ['Привет', 'мир', 'изучаем', 'JavaScript'];

function newArr(arr){
    return arr.reduce((acc, val) => acc + " " + val)
}


const combinedString = newArr(words)
console.log(combinedString)