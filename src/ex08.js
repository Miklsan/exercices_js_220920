/*
Ecrivez une fonction isPalindrome qui prend une string en paramètre. Cette fonction retourne true si le paramètre est un palindrome sinon retourne false

isPalindrome('tenet') // retruns true
isPalindrome('Alyra') // returns false
*/

function isPalindrome(string) {
    const reverseString = string.split('').reverse().join('')
    return reverseString === string
}
console.log(isPalindrome('181181'))
