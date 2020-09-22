/*Ecrivez une fonction makeUnique qui prend comme paramètre une liste et enlève tous les doublons, et retourne cette cette liste classée par ordre croissant.

makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]) //returns [1, 2, 3, 4, 5, 7] */

function makeUnique(list) {
    let newList = []
    for (let el of list) {
        if (!newList.includes(el)) {
            newList.push(el)
        }
    }
    return newList.sort((a, b) => a - b)
}
console.log(makeUnique([1, 2, 1, 3, 2, 4, 5, 7, 5, 1]))
