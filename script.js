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


// MUTABILIDAD

let str = "hola" // stings y todos los elementos primitivos son inmutables

console.log(str[0])

str[0] = "H"
console.log(str)

str = str[0].toUpperCase() + str.slice(1)
console.log(str)


let friends = ["Ross", "Monica", "Phoebe", "Chandler", "Joey", "Rachel"]

friends[0] = "Mike"

console.log(friends)
// arrays y objectos en JS son mutables

console.log( friends.slice(2, 4) )
console.log( friends )


// pop . elimina del final
// y shift . elimina del inicio

let elementRemoved = friends.pop() // eliminando el ultimo elemento del array
console.log("luego del pop", friends)
console.log("elemento removido", elementRemoved)

let firstElemRemoved = friends.shift()
console.log("luego del shift", friends)
console.log("elemento removido", firstElemRemoved)

// friends.pop()
// friends.pop()
// friends.pop()
// friends.pop()
// console.log(friends) // ha eliminado todos!

// console.log( friends.pop() )
// console.log( friends )


// push . agrega al final
// y unshift . agrega al inicio

friends.push("Janice")
console.log(friends)

friends.unshift("Gunther")
console.log(friends)


// .splice
// tanto eliminar como agregar elementos internos del array

friends.splice(2, 2) // ejemplo solo de borrar
console.log(friends)

friends.splice(1, 0, "Emily") // ejemplo solo de agregar
console.log(friends)

friends.splice(3, 1, "Robert", "Nona")
console.log(friends)


// REFERENCIAS

let age1 = 40;
let age2 = 40;

console.log( age1 === age2 )


let arr1 = [10, 20, 30] // ref 1234
let arr2 = [10, 20, 30] // ref abcd

console.log( arr1 === arr2 )
// cuando comparamos objetos en JS, compara por su referencia


let arr3 = arr1; // .??? aqui no estamos copiando el array/clonando
// estamos asignando la misma referencia del array indicado

// hacer lo de arriba es mala practica, pero JS muchas veces lo hacer tras camaras y hay que tenerlo en cuenta
console.log(arr3) // ref 1234

arr3.pop()
arr3.pop()
arr3.pop()

console.log(arr3);

console.log(arr1)

console.log( arr3 === arr1) // true, ambos tienen la misma referencia




let numArr1 = [10, 20, 30] // ref 1234
let numArr2 = [10, 20, 30] // ref abcd

console.log( numArr1 === numArr2 )


let check = true;

for (let i = 0; i < numArr1.length; i++) {
    if (numArr1[i] !== numArr2[i]) {
        check = false
    }
}

console.log(check)

// stringify
console.log( JSON.stringify(numArr1) === JSON.stringify(numArr2) )


console.log("FUNCIONES")

// FUNCIONES

// declaramos una funcion (creamos)
function functionName( /* parametros opcionales*/ ) {
    // lo que se ejecuta cada vez que invocamos la funcion
    // opcionalmente tendremos un return que saca un valor de la funcion
}

// invocar la funcion
functionName(/* argumentos opcionales*/)
functionName(/* argumentos opcionales*/)
functionName(/* argumentos opcionales*/)



function printName(name) {
    // let name = ???
    // console.log(name)
    let sentence = `Hola ${name}`
    // console.log(`Hola ${name}`)
    return sentence // no saca el nombre de la variable
}

let sentence1 = printName("Ivan")
let sentence2 = printName("Caro")
let sentence3 = printName("Rebeca")
let sentence4 = printName("Miguel")
let sentence5 = printName("Malva")

console.log([sentence1, sentence2, sentence3, sentence4, sentence5])



function sumNumbers(num1, num2) {
    // console.log(num1, num2)
    let sum = num1 + num2
    return sum;
}


console.log( 9 ); // 9

let sumOutside = sumNumbers(8, 10); // 18
console.log(sumOutside * 1000)



// FORMAS DE ESCRIBIR FUNCIONES

// declaracion de funcion
function functionDeclaration() {
    return "Esto es una funcion de declaracion"
}

// expresion de funcion (menos utilizadas)
let functionExpression = function() {
    return "Esto es una funcion de expression"
}

// ES6 function de flecha
let arrowFunction = () => {
    return "Esto es una funcion de flecha"
}

functionDeclaration()
functionExpression()
arrowFunction()


// una function que capitalize un nombre

// function capitalize(string) {
//     let capitalizedString = string[0].toUpperCase() + string.slice(1)
//     return capitalizedString
// }

const capitalize = (string) => {
    let capitalizedString = string[0].toUpperCase() + string.slice(1)
    return capitalizedString
}

console.log( capitalize("bob") )
console.log( capitalize("hola") )
console.log( capitalize("goku") )
console.log( capitalize("gohan") )

