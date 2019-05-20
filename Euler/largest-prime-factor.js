// Getting a prime number
/*
1. Get all factors. Figure out if prime and then if largest.
2. 

*/

const isPrime = num => {
    let number_root = Math.sqrt(num); // Dividend
    for(let i = 2; i <= number_root; i++){
        if(num % i === 0) return false; 
    }
    return num > 1;
}

const getPrimeFactors = (number) => {
    let factors = [];

    let number_root = Math.sqrt(number); // Dividend
    // Start at 2 since it is the smallest prime number.
    for(let i = 2; i <= number_root; i++){
        if(number % i === 0 && isPrime(i)){
            factors.push(i);
        }
    }

    const largestFactor = factors[factors.length - 1]; 

    return {
        factors, // All factors
        largestFactor // Self explanatory my G
    }
}



console.log(getPrimeFactors(600851475143))