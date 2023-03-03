let employee2: {
    readonly id: number, /// no te va a permitir cambiarlo 
    name?: string, // opcional el ?
    retire: (date: Date) => void,
} = {id:1, 
    name:'juan',
    retire:(date:Date)=>
    {
        return console.log(date);
    }
}
// controla que no haya 2 objetos con el mismo nommbre
// usar mejor TYPE alias
// employee.id=0; error

