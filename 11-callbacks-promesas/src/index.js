import './styles.css';
import { buscarHeroe as buscarHeroeCallback } from './js/callback';
import { buscarHeroe as buscarHeroePromise } from './js/promesas';

const heroeId = 'capi';

buscarHeroePromise(heroeId)
.then(heroe => {
    console.log(`Enviando a ${heroe.nombre} a la mision`);
})
