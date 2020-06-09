//3. .length
let cars = ["Ford", "Hyundai", "Toyota", "Honda"];
console.log (cars.length)

//4. concat

let moreCars = ["Ferrari", "Lamborghini", "Porche", "Honda"]

let totalCars = cars.concat(moreCars); 
console.log(totalCars)

//5. indexOf/lastIndexOf


console.log(totalCars.indexOf("Honda"));

console.log(totalCars.lastIndexOf("Ford"));

//6. join 

let stringOfCars = totalCars.join()

//7. split
let totalCars= stringOfCars.split("")

//8. reverse

let carsInReverse = totalCars.reverse()
console.log(carsInReverse)

//9. sort 
carsInReverse = carsInReverse.sort()
console.log(carsInReverse)

alert(carsInReverse.indexOf("Ferrari"))

//10. slice

let removedCars = carsInReverse.slice(1,4)
removedCars.push(carsInReverse.slice(2,3))
console.log(removedCars)

console.log(carsInReverse)

//11. splice

carsInReverse.splice(1,2, "Ford", "Honda")
console.log(carsInReverse)

//12. push
carsInReverse.push("Ford", "Honda")
console.log(carsInReverse)

//13. pop
carsInReverse.pop()
console.log(carsInReverse)

//14. shift 
carsInReverse.shift()
console.log(carsInReverse)

//15. unshift 
carsInReverse.unshift("Volvo")
console.log(carsInReverse)


//16. forEach

let numbersArray = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];

let array2 = []
numbersArray = numbersArray.forEach(numbersArray => array2.push(numbersArray + 2))

console.log(array2)