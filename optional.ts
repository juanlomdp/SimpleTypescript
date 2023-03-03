type Customer =
{
    date?: Date 
}

function getCustomer(id:number): Customer | null
{
    return id === 0 ? null : { date: new Date() }
}

let customer = getCustomer(0);
console.log(customer?.date?.getFullYear()); // detecta que no puede dado que existe el caso null y me coloca el ?

