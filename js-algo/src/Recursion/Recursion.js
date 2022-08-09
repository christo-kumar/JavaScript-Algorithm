export const Recursion = () => {

    //console.log(`Factorial Output - ${factorial(5)}`);
    //console.log(`Arithmatic Series - ${arithmaticSeries(2, 2, 1, 10)}`);
    console.log(`Fibonnacci Series - ${fibbonacci(0, 0, 1, 10)}`);

    return (
        <>
            <h3> Java Script Recursion </h3>
        </>
    )
}

const fibbonacci = (pVal, cVal, cTh, nTh) => {
    if (cTh > nTh) {
        return;
    }

    if (cTh === 1) {
        console.log(1);
        fibbonacci(1, 1, cTh + 1, nTh);
        return;
    }

    console.log(cVal);
    fibbonacci(cVal, cVal + pVal, cTh + 1, nTh);
}












//Arithematic Series
const arithmaticSeries = (term, cd, cTh, nTh) => {
    if (cTh > nTh) {
        return;
    }
    console.log(term);
    arithmaticSeries(term + cd, cd, cTh + 1, nTh);
}

//factorial 
const factorial = (number) => {
    if (number <= 1) {
        return 1;
    }
    return number * factorial(number - 1);
}


//Fibonacci

