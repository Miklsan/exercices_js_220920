/*Ecrivez une fonction biggest qui retourne le plus grand élément d'une liste de nombre.

biggest([99, 100, 101, 1]) // returns 101*/

function biggest(arrayOfNumbers) {
    return arrayOfNumbers.length > 0 ? Math.max(...arrayOfNumbers) : undefined
}
console.log(biggest([99, 100, 101, 1]))
