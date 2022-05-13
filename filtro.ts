import { platillos, Platillo } from './platillos.ts';

export function contiene(primeraPalabra: string, segundaPalabra: string) {
    return primeraPalabra.toLowerCase().includes(segundaPalabra.toLowerCase());
}

export function filtrarPlatillos(platillos: Platillo[], nombre: string) {
    return platillos.filter((platillo) => contiene(platillo.nombre, nombre));
}

export function filtrarTags(platillos: Platillo[], tag: string) {
    return platillos.filter((platillo) =>
        platillo.tags.map((t) => contiene(t, tag)).includes(true)
    );
}

console.log(filtrarPlatillos(platillos, 'piz'));

console.log(filtrarTags(platillos, "carn"));
