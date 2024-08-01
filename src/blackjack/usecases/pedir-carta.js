
/**
 * Esta funcion permite pedir carta.
 * @param { String[] } deck Es un arreglo de string.
 * @returns { String } retorna la carta del deck.
 */
export const pedirCarta = ( deck ) => {
  
    if ( !deck || deck.length === 0 ) {
        throw 'No hay mas cartas en el deck';
    }

    return deck.pop();

}