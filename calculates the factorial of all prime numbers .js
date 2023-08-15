function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function factorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorial(num - 1);
}

function prime(start, end) {
    for (let num = start; num <= end; num++) {
        if (isPrime(num)) {
            console.log(`Factorial of prime number ${num}: ${factorial(num)}`);
        }
    }
}

prime(1, 100);


// 1.'isPrime' function checks if a number is prime using a basic prime-checking algorithm. 
// It eliminates even numbers and multiples of 3 for efficiency.

// The factorial function calculates the factorial of a given number recursively.

// The prime function takes the range (start, end) and iterates through each number within that range. For each number, it checks if it's prime using the isPrime function. If it's prime, it calculates and logs the factorial of that prime number.

// In this example, the prime function is called with the range (1, 100) to find and display the factorial of prime numbers between 1 and 100.