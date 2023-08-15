function sumOfMultiples() {
    let sum = 0;
    
    for (let i = 1; i < 1000; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    
    return sum;
}

const result = sumOfMultiples();
console.log("The sum of the multiples of 3 and 5 under 1000 is:", result);

// The sumOfMultiples function initializes a variable sum to keep track of the sum of multiples.
// it uses a for loop that iterates through the numbers from 1 to 999 (less than 1000).

// Inside the loop, it checks if the current number (i) is a multiple of 3 or 5 using the modulo operator (%). If it is, the number is added to the sum.

// After the loop completes, the function returns the calculated sum.

// The result variable stores the sum of the multiples calculated by the sumOfMultiples function.