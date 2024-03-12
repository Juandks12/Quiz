
const texto = "¡Compadre, cómpreme un coco! ¡Compadre, coco no compro!, porque el que poco coco come, poco coco compra y como yo poco coco como, poco coco compro";
const regexp = /coco/gim;
const Palabra = "fresa";

const cambio = texto.replace(regexp, Palabra);

console.log(cambio);
