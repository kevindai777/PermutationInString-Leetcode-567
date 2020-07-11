//Objective is to see whether a permutation of a string exists in another string.

let s1 = "ab", s2 = "eidbaooo"


//O(n * m) solution where n is the length of the permutation and m is the length of the large string
//We use a sliding window approach

let charArray = new Array(26).fill(0)
    
//Fill the array with the characters from permutation
for (let i = 0; i < s1.length; i++) {
    charArray[s1.charCodeAt(i) - 97]++
}

let start = 0
let end = s1.length

while (end <= s2.length) {
    let substring = s2.substring(start, end)
    let temp = charArray.slice(0)
    
    //Keylock
    for (let i = 0; i < substring.length; i++) {
        temp[substring.charCodeAt(i) - 97]--
    }
    
    let result = true
    for (let i = 0; i < temp.length; i++) {
        if (temp[i] !== 0) {
            result = false
        }
    }
    
    
    if (result == true) {
        return true
    }
    
    start++
    end++
}

return false