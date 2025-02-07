
/**
 * Obtener el valor de la carta
 * @param { String } carta 
 * @returns { Number } Es el valor de la carta
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring( 0, carta.length - 1 ) ;

    return ( !isNaN( valor ) ) ? valor * 1 :
           ( valor === 'A' ) ? 11 : 10;

    // let puntos = 0;
    // if ( isNaN( valor ) ) {

    //     puntos = ( valor === 'A' ) ? 11 : 10;

    // } else {
    //     puntos =  valor * 1; // Multiplica por 1 para convertir el numero de string en version numerica.
    // }

    // console.log( puntos);
}