
/**
 * Determina el ganador del juego
 * @param { Number[] } puntoJugadores Es un arreglo del tipo number.
 */

export const determinarGanador = ( puntoJugadores ) => {
      
    const [ puntosMinimos, puntosComputadora ] = puntoJugadores;
    
    setTimeout(() => {
        
        if ( puntosComputadora === puntosMinimos ) {
            alert( 'Nadie gana :(' );
        } else if ( puntosMinimos > 21 ) {
            alert( 'Computadora Gana!' );
        } else if ( puntosComputadora > 21 ) {
            alert( 'Jugador Gana!' );
        } else if ( puntosMinimos === 21 ) {
            alert( 'Jugador Gana!' );
        } else if ( puntosComputadora === 21) {
            alert( 'Computadora Gana' );
        } else {
            alert( 'Computadora Gana' );
        }

    }, 1000);

}