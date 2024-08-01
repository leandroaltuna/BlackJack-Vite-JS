import { pedirCarta, acumularPuntos, mostrarCarta, determinarGanador } from './';


/**
 * Turno de la computadora para jugar
 * @param { Number } puntosMinimos Puntos minimos que la computadora necesita para ganar.
 * @param { String[] } deck Es un arreglo de string.
 * @param { Number[] } puntoJugadores Es un arreglo de number.
 * @param { HTMLElement } puntosHTML Elemento de HTML para mostrar el puntaje o puntos.
 * @param { HTMLDivElement } divCartasJugadores Elemento HTML del tipo div para mostrar las cartas del deck.
 */
export const turnoComputadora = ( puntosMinimos, deck = [], puntoJugadores, puntosHTML, divCartasJugadores ) => {
  
    if ( !puntosMinimos ) throw new Error( 'puntosMinimos son necesarios' );

    let puntosComputadora = 0;
    const turnoComp = puntoJugadores.length - 1;

    if ( puntoJugadores.length === 2 ) {
        
        do {
            const carta = pedirCarta( deck );
        
            puntosComputadora = acumularPuntos( carta, turnoComp, puntoJugadores, puntosHTML );
            mostrarCarta( carta, turnoComp, divCartasJugadores );
    
        } while ( ( puntosComputadora < puntosMinimos[0] ) && ( puntosMinimos[0] <= 21 ) );
    
        determinarGanador( puntoJugadores );

    } else {
        //TODO: en caso sean mas jugadores.
    }

}