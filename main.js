cars = ["Ford", "Hyundai", "Toyota", "Honda"];
console.log (cars.length)

moreCars = ["Ferrari", "Lamborghini", "Porche", "Honda"]

let totalCars = cars.concat(moreCars); 
console.log(totalCars)

console.log(totalCars.indexOf("Honda"));

console.log(totalCars.lastIndexOf("Ford"));

let stringOfCars = totalCars.join()

let totalCars= stringOfCars.split("")

let carsInReverse = totalCars.reverse()
// console.log(carsInReverse)

carsInReverse = carsInReverse.sort()
// console.log(carsInReverse)


alert(carsInReverse.indexOf("Ferrari"))

let removedCars = carsInReverse.slice(1,4)
removedCars.push(carsInReverse.slice(2,3))
// console.log(removedCars)

console.log(carsInReverse)

carsInReverse.splice(1,2, "Ford", "Honda")
// console.log(carsInReverse)

carsInReverse.push("Ford", "Honda")
// console.log(carsInReverse)

carsInReverse.pop()
// console.log(carsInReverse)

carsInReverse.shift()
console.log(carsInReverse)

carsInReverse.unshift("Volvo")
console.log(carsInReverse)


let numbers = [23, 45, 0, 2]
let array = []
numbers = numbers.forEach(element => array.push(element + 2))
console.log(array)

numbers.forEach(number =>)

let numbersArray = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

let array2 = []
numbersArray = numbersArray.forEach(numbersArray => array2.push(numbersArray + 2))

console.log(array2)

