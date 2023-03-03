type Employee =
{
    readonly id: number, /// no te va a permitir cambiarlo 
    name?: string, // opcional el ?
    retire: (date: Date) => void,
}


let employee: Employee = {
    id:1, 
    name:'juan',
    retire:(date:Date)=>
    {
        return console.log(date);
    }
}
