export interface Platillo {
    id: number;
    nombre: string;
    precio: string;
    tags: string[];
}

export const platillos: Platillo[] = [
    { id: 1, nombre: "Pizza", precio: "$10", tags: ["italiana", "rapida"] },
    { id: 2, nombre: "Hamburguesa", precio: "$20", tags: ["hamburguesa", "carne", "americana"], },
    { id: 3, nombre: "Ensalada", precio: "$5", tags: ["verduras", "frutas", "vegana"], },
    { id: 4, nombre: "Tacos", precio: "$15", tags: ["tacos", "carne", "mexicana"], },
    { id: 5, nombre: "pozole", precio: "$10", tags: ["pozole", "carne", "mexicana"], },
    { id: 6, nombre: "burritos", precio: "$10", tags: ["burritos", "carne", "mexicana"], },
    { id: 7, nombre: "Pasta", precio: "$8", tags: ["italiana", "pasta"] },
    { id: 8, nombre: "Sushi", precio: "$20", tags: ["sushi", "japonesa"] },
    { id: 9, nombre: "Pescado", precio: "$15", tags: ["pescado", "mariscos"] },
    { id: 10, nombre: "Ceviche", precio: "$20", tags: ["mariscos", "carne"] },
    { id: 11, nombre: "Pollo", precio: "$10", tags: ["pollo", "carne"] },
    { id: 12, nombre: "Pizza de peperoni", precio: "$10", tags: ["italiana", "peperoni"], },
    { id: 13, nombre: "Pizza de queso", precio: "$10", tags: ["italiana", "queso"], },
];

