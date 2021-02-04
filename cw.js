str = "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"

function fireFight(s) {
    return s.replace(/fire/gi, '~~');
}

console.log(fireFight(str));

// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:

function rowSumOddNumbers(n) {
    return n * n * n;
}

console.log(rowSumOddNumbers(5));

