// 1. (_completed below_) Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression -  the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
}
  
  console.log(maxOfTwoNumbers(3, 9));

  

  
// 2. Define a function as a function expression, `maxOfThree`, that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

function maxOfThree(x, y, z) {
    if (x >= y) {
        return x;
    } else if (z <= y) {
        return y; 
    } else {
        return z;
    }
}
   
console.log(maxOfThree(5,10,15));

// 3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(characters) {
    let vowel = ['a', 'e', 'i', 'o', 'u', 'y']

    if (vowel.includes(characters)) {
        return true;
    } else {
        return false;
    }
}
console.log(isCharAVowel('false'));

// 4. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.

function sumArray(arrayNums) {
    let sum = 0;
    arrayNums.forEach(function(num) {
        sum += num;
    })
    return sum;
}

console.log(sumArray([2, 4, 5]));

// 5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product of those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.

function multiplyArray(arrayNumbers) {
    let sum = 1;
    // arrayNumbers.forEach(function(number) {
    //     sum = number * sum;
    // })
    // return sum;


    //  refactor the function with the Arrow => function! 
    arrayNumbers.forEach(number =>  {
        sum = number * sum;
    })
    return sum;
}

console.log(multiplyArray([2, 4, 5]));

// 6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.

// SO we need to named functions - we treat arrow expressions like Variables! ----------
let numArgs = (...arguments) => {
    return arguments.length
}

console.log(numArgs(6,6,6,6,6,6,))

// 7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".

let reverseString = (str) => {
    let newString = "";

    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

console.log(reverseString('Goodluck! Your almost done keep going!'));


// 8. Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the longest string's length.

let longestStringInArray = (str) => {
    let longestWord = "";
    
    str.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    })
    return longestWord;
}

console.log(longestStringInArray(['no', 'poop', 'Gonzalez', 'magic-tree-house']));


// 9. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.

let stringsLongerThan = (array, number) => {
    let lastArray = [];

    array.forEach(str => {
        if (str.length > number) {
            lastArray.push(str);
        }
    })
    return lastArray;
}

console.log(stringsLongerThan(['magic-tree-house', 'dinosaurs', 'before', 'dark', 'no', 'go'], 6));
