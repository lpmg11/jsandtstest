import { Platillo, platillos } from './platillos.ts'

const nombrePlatillosForEach = platillos.forEach(platillo => {
    return platillo.tags
})

const nombrePlatillos = platillos.map(platillo => {
    return(platillo.nombre + ' platillo')
})

console.log(nombrePlatillosForEach)

console.log (nombrePlatillos)
