// aca configure el json para agregar mas controles
// TypeScript  controla que deba colocar todas las posibilidades
// controla que no le pases argumntos de mas

function calcular( a: number, b=200):number
{
    if(a>b)
    {
        return a-b;
    }

    return b-a;
}

calcular(3)
calcular(5,7)
//calcular(2,4,6)