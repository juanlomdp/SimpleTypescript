function Great (name:string | null)
{
    if(name)
        return  console.log(name.toUpperCase());
    else
        return (console.log('hola'));

}

Great(null) // no lo permite si no lo contemplo