const checkPalindrome = number => {
    const BASE = 10;
    let numberToString = number.toString(BASE);
    let numberReversed = numberToString.split("").reverse().join(""); // split to array, reverse, then join    
    if(numberReversed === numberToString){
        return true;
    }
    return false;
}

const getLargestPalindrome = () => {
    let start = 100;
    let end = 999;
    let palindromeArray = [];

    for(let numStart = start; numStart <= end; numStart ++){
        for(let numEnd = end ; numEnd >= start; numEnd --){
            let product = numStart * numEnd;
            let isPalindrome = checkPalindrome(product);
            if(isPalindrome){
                palindromeArray.push(product);
            }
        }
    }

    return Math.max(...palindromeArray);
}
