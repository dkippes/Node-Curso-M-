import "./styles.css";
import { buscarHeroeAsync, promesaLenta , promesaMedia, promesaRapida } from './js/promesas';

// Promise.race([promesaLenta, promesaMedia, promesaRapida])
// .then(console.log())
// .catch(console.warn())

(async () => {
    console.log(await buscarHeroeAsync('capi'));
})()
