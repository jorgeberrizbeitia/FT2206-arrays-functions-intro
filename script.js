console.log("funcionando! yay!")


// ARRAYS

let myArr = ["hola", 45345, true, undefined, {}, ["adios"]]
//                0       1     2     3

console.log(myArr)



let cities = ["Madrid", "Barcelona", "Malaga", "Berlin", "Tokyo", "Caracas"]


console.log( cities.length )

console.log( cities[0] )

// primera letra de la primera ciudad
console.log( cities[0][0] )

// la ultima ciudad
console.log( cities[cities.length - 1] )

// el primer caracter de la ultima ciudad
console.log( cities[cities.length - 1][0] );

// el ultimo caracter de la ultima ciudad!
console.log( cities[cities.length - 1][cities[cities.length - 1].length - 1] )

let lastCity = cities[cities.length - 1]
let lastCharOfLastCity = lastCity[lastCity.length - 1]
console.log(lastCharOfLastCity)



let countries = ["España", "Alemania", "Italia", "Francia", "Japon", "Venezuela"]

console.log( countries.slice(2, 4) )

// quiero los elementos desde el segundo hasta el final
console.log( countries.slice(1, countries.length) )
console.log( countries.slice(1) )

// quiero los dos ultimos elementos del array
console.log( countries.length - 2 )
console.log( countries.slice(countries.length - 2) )
console.log( countries.slice(-2) )


// un array con el primer y el ultimo elemento
let cualquiera = [countries[0], countries[countries.length - 1]]
console.log(cualquiera)

console.log( countries[0], countries[countries.length - 1] )
console.log( [ countries[0], countries[countries.length - 1] ] )


console.log( countries[0] + countries[countries.length - 1] )


// indexOf() u includes()
// hacer busquedas dentro del array

console.log( countries.indexOf("Alemania") ) // 1
console.log( countries.indexOf("Peru") ) // -1 significa, no lo conseguí

console.log( countries.includes("España") ) // true
console.log( countries.includes("Dinamarca") ) // false

// estos dos metodos tambien aplican para strings

// console.log( countries.toUpperCase() ) // :(