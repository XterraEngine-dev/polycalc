let calcular_poligono = (longitud, latitud, lista_de_poligonos) => {

    let numero_de_poligonos = lista_de_poligonos.length;
    let dentro = false;

    let contador = 0;

    let range = n => Array.from(Array(n).keys())
    for (i in range(numero_de_poligonos)) {
        contador += 1;

        if (contador == numero_de_poligonos) {
            contador = 0;
        }
        if (lista_de_poligonos[i][1] < latitud && lista_de_poligonos[contador][1] >= latitud || lista_de_poligonos[contador][1] < latitud && lista_de_poligonos[i][1] >= latitud) {

            if ((lista_de_poligonos[i][0] + (latitud - lista_de_poligonos[i][1]) / (lista_de_poligonos[contador][1] - lista_de_poligonos[i][1]) * (lista_de_poligonos[contador][0] - lista_de_poligonos[i][0]) < longitud)) {
                dentro = !dentro;
            }


        }

    }

    return dentro;


}

let coordenadas = [[14.59126, -90.53429], [14.58262, -90.536], [14.58542, -90.54566], [14.59331, -90.54467]];

//FUERA
let longitud = 14.596;
let latitud = -90.5353;

//DENTRO
//let longitud = 14.58823
//let latitud = -90.541



let resultado = calcular_poligono(longitud, latitud, coordenadas);

console.log(resultado)

