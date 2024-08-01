
/**
 * Mostrar cartas del deck.
 * @param { String } carta Carta a mostrar del deck.
 * @param { Number } turno Turno del jugador.
 * @param { HTMLDivElement } divCartasJugadores Elemento HTML del tipo div para mostrar las cartas del deck.
 * @returns { HTMLImageElement } Retorna la imagen de la carta.
 */

export const mostrarCarta = ( carta, turno, divCartasJugadores ) => {

    if ( !carta || !divCartasJugadores ) throw new Error( 'Argumento carta, turno, y divCartasJugadores son obligatorios' );

    const imgCarta = document.createElement( 'img' );
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add( 'carta' );

    divCartasJugadores[ turno ].append( imgCarta );

}