// import crearDeck from './usecases/crear-deck.js';
import { crearDeck, pedirCarta, turnoComputadora, acumularPuntos, mostrarCarta } from './usecases';


const miModulo = (() => {

  'use strict';

  /* 
  * 2C = Two of Clubs,
  * 2D = Two of Diamonds,
  * 2H = Two of Hearts,
  * 2S = Two of Spades,
  */
  
  
  let deck         = [];
  const tipos      = [ 'C', 'D', 'H', 'S' ], 
        especiales = [ 'A', 'Q', 'J', 'K' ];
  
  let puntoJugadores = [];
  
  //* Referencias del HTML
  const btnPedir   = document.querySelector( '#btnPedir' ),
        bntDetener = document.querySelector( '#btnDetener' ),
        bntNuevo   = document.querySelector( '#btnNuevo' );

  const divCartasJugadores = document.querySelectorAll( '.divCartas' ),
        puntosHTML         = document.querySelectorAll( 'small' );
  
  // Esta funcion inicializa el juegos
  const inicializaJuego = ( numJugadores = 2 ) => {
      
      deck = crearDeck( tipos, especiales );
      
      puntoJugadores = [];
      for (let i = 0; i < numJugadores; i++) {
          puntoJugadores.push( 0 );
      }

      puntosHTML.forEach( elem => elem.innerText = 0 );
      divCartasJugadores.forEach( elem => elem.innerHTML = '' );
  
      btnPedir.disabled   = false;
      bntDetener.disabled = false;
  
  }
  
  
  //* Eventos
  btnPedir.addEventListener( 'click', () => {
  
      const carta = pedirCarta( deck );
  
      const puntosJugador = acumularPuntos( carta, 0, puntoJugadores, puntosHTML );
  
      mostrarCarta( carta, 0, divCartasJugadores );

      if ( puntosJugador > 21 ) {
  
          btnPedir.disabled = true;
          bntDetener.disabled = true;
          turnoComputadora( puntosJugador, deck, puntoJugadores, puntosHTML, divCartasJugadores );
          
      } else if ( puntosJugador === 21 ) {
          
          btnPedir.disabled = true;
          bntDetener.disabled = true;
          turnoComputadora( puntosJugador, deck, puntoJugadores, puntosHTML, divCartasJugadores );
  
      }
  
  });
  
  bntDetener.addEventListener( 'click', () => {
  
      btnPedir.disabled = true;
      bntDetener.disabled = true;
      turnoComputadora( puntoJugadores, deck, puntoJugadores, puntosHTML, divCartasJugadores );  
  });
  
  bntNuevo.addEventListener( 'click', () => {
  
      inicializaJuego();    
  
  });

  return {
      nuevoJuego: inicializaJuego
  };

})();