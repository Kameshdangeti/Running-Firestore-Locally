
//You are given 0-indexed array words consisting of distinct strings.

//The string words[i] can be paired with the string words[j] if:

//The string words[i] is equal to the reversed string of words[j].

//0<=i<j<<words.length.

//Return the maximum number of pairs that can be formed from the array
//words.

//Note that each string can be belong in at most one pair.

/* 
Ex:-
Input: words = ["cd","ac","dc","ca","zz"]
Output: 2
Explanation: In this example, we can form 2 pair 
of strings in the following way:
- We pair the 0th string with the 2nd string, as 
the reversed string of word[0] is "dc" and is 
equal to words[2].
- We pair the 1st string with the 3rd string, 
as the reversed string of word[1] is "ca" and is 
equal to words[3].
It can be proven that 2 is the maximum number of 
pairs that can be formed.
*/

var maximumNumberOfStringPairs = function (words) {
    const set = new Set()
    let n = 0;
    for (let word of words) {
        if (set.has(word.split('').reverse().join('')))  //The split() method of String values takes a pattern 
        {                                                //and divides this string into an ordered list of substrings
            n++;                                          // by searching for the pattern.
        }
        set.add(word);                                  //The has() method of Map instances returns a boolean 
    }                                                    //indicating whether an element with the specified key exists 
    return n;                                           //in this map or not.
};
console.log(maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"]));