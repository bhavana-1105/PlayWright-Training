function listPrimeNumbers(num1, num2)
{
    let primes = [];
    for(let i = num1 ; i <= num2 ; i++)
    {
        if(checkPrime(i))
        {
            primes.push(i);
        }
    }
    if(primes.length !== 0)
    {
        console.log("Primes: "+ primes);
    }
}
function checkPrime(num)
{
    if(num <= 1)
    {
        return false;
    }
    for(let i=2; i*i<=num ; i++)
    {
        if( num%i == 0)
        {
            return false;
        }
    }
    return true;
}
console.log(listPrimeNumbers(5, 30));