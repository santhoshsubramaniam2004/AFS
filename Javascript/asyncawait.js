async function funname()
{
    return "Hello"
}
arrowFunName=async()=>
{
    return"KEC"
}

console.log(funname());
console.log(arrowFunName());

async function funname()
{
    console.log("Hello");
}
arrowFunName=async()=>
{
    console.log("KEC");
}

funname();
arrowFunName();