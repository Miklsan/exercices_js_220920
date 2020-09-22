/*
Ecrivez une fonction showStars qui prend en paramètre un nombre nbStars et qui affiche sur le terminal comme suit:

showStars(3)
output:

*
**
***


showStars(10)
output:

*
**
***
****
*****
******
*******
********
*********
**********

*/
function showStars(nbStars) {
    for (let i = '*'; i.length <= nbStars; i += '*') {
        console.log(i)
    }
}
showStars(3)
showStars(10)
