import { valorCarta } from './';

/**
 * Turno: 0 es el primer jugador y el ultimo sera la computadora
 * @param { String } carta Carta del deck.
 * @param { Number } turno El turno del jugador.
 * @param { Number[] } puntoJugadores Es un arreglo de number.
 * @param { HTMLElement } puntosHTML Elemento de HTML para mostrar el puntaje o puntos.
 * @returns Retorna un arreglo del total de puntos del jugador.
 */
export const acumularPuntos = ( carta, turno, puntoJugadores, puntosHTML ) => {

    if ( !puntosHTML ) throw new Error( 'Argumento puntosHTML es necesario' );

    puntoJugadores[ turno ] = puntoJugadores[ turno ] + valorCarta( carta );
    puntosHTML[ turno ].innerText = puntoJugadores[ turno ];
    return puntoJugadores[ turno ];

}