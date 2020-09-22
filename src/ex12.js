/*un garagiste vous demande de compter le nombre de roues qu'il y a dans son garage.
Les roues sont toutes montées sur des véhicules de types:
monocyle: 1 roue
moto: 2 roues
voiture: 4 roues
limousine: 6 roues
Ecrivez une fonction countWheels qui prend 4 parmètres, qui correspondent au nombre de chaques véhicules et qui retourne le nombre de roues totales:

countWheels(10, 20, 7, 2) //returns 90
countWheels(2, 3, 4, 5) // returns 54
les arguments de la fonction doivent être passés dans l'ordre suivant:

countWheels(nb_monocycle, nb_moto, nb_voiture, nb_limousine) */
let monocycle = 1
let moto = 2
let voiture = 4
let limousine = 6

function countWheels(nb_monocycle, nb_moto, nb_voiture, nb_limousine) {
    return (
        monocycle * nb_monocycle +
        moto * nb_moto +
        voiture * nb_voiture +
        limousine * nb_limousine
    )
}
console.log(countWheels(10, 20, 7, 2))
console.log(countWheels(2, 3, 4, 5))
