let input = "ESCORpio"
let db = "escorpio"

console.log(input.toLowerCase())
console.log(input.toUpperCase())
console.log(input.toLowerCase() === db.toLowerCase())
console.log(input.toUpperCase() === db.toUpperCase())

let str_1 = "Hola soy la primera cadena."
let str_2 = "Y yo soy la segunda cadena."

console.log(str_1.concat(" ", str_2))
console.log(str_1 + " " + str_2)
console.log('${str_1} ${str_2}')

let str_3 = "   Hola soy un string con espacios al final.  "
console.log(str_3.length)

console.log(str_3.trim().length)
console.log(str_3.trimStart().length)
console.log(str_3.trimEnd().length)

let str_4 = "Hola soy el string numero 4" // ["H", "o", "l", "a", " ", "s"........]

console.log(str_4.charAt(5))
console.log(str_4[5])

let str_5 = "Hola soy Groka y me gusta el surf. Mi nombre es Gorka y mi apellido es villar"
console.log(str_5.indexof("Gorke"))
console.log(str_5.charAt(9))
console.log(str_5.lastIndexOf("Gorka"))
