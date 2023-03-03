type Drag = {
    drag: ()=> void
}

type Drop = {
    drop: () => void
}

type Move  = Drag & Drop;

let cuadro : Move = {
    drag:()=> {},
    drop: () => {},
}