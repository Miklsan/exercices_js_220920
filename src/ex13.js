/*Ecrivez un programe qui affiche tous les nombres de 0 à 1000 en utilisant une fonction récursive.
Vous devez absolument utiliser une fonction récursive pour résoudre ce problème. Une fonction récursive est une fonction qui s'appelle elle même. explication
*/
function zeroToMille(start = 1, end = 1000) {
    console.log(start)
    let next = start + 1
    if (start < end) {
        zeroToMille(next, end)
    }
}
zeroToMille()
