/*Ecrivez une fonction sortAscend qui prend comme paramètre une liste et classe cette list par ordre croissant.

sortAscend([99, 100, 101, 1]) // returns [1, 99, 100, 101]*/

function sortAscend(list) {
    return list.sort((a, b) => a - b)
}

console.log(sortAscend([99, 100, 101, 1]))
