// a.belly[0]

// let x = 6+3+'3';
// console.log(x)
// var compare = function (test1, test2) {
//  test1===test2;}
// compare (1078,"1078");
// const animals = [ "rabbit", "dog"]
// animals.unshift("lizard")
// console.log (animals) it adds\
// const x = [1,2]
// const y = [5.7]
// const z = [...x,...y]
// console.log(z)
function sum(num1, num2 = 2, num3 = 3){
    return num1+num2+ num3;
}
let values = [1,5]
let total = sum(4,...values)
console.log (total)