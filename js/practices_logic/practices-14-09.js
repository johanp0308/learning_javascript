/*        Code Wars Exercises       */

/* 1.

link => https://www.codewars.com/kata/55147ff29cd40b43c600058b

Given a string, you progressively need to concatenate the first letter from the left and the first letter
to the right and "1", then the second letter from the left and the second letter to the right and "2", and 
so on.

If the string's length is odd drop the central element.

*/

function charConcat(string) {
    let con_String = "";
    let strnew = string;
    if (string.length % 2 !== 0) {
        strnew = string.split("").filter((item) => item !== string[(string.length) / 2]).join("");
    }
    let cont = 0;
    for (var i = strnew.length - 1, j = 0;i >= 0 && j < (strnew.length-1) / 2;i--, j++) {
        cont++;
        con_String += strnew[j] + strnew[i] + cont;
    }

    return con_String;
}

console.log(charConcat("abcdefghi"));
