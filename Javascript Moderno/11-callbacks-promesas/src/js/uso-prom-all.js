import "./styles.css";
import { buscarHeroe as buscarHeroeCallback } from "./js/callback";
import { buscarHeroe as buscarHeroePromise } from "./js/promesas";

const heroeId1 = "capi";
const heroeId2 = "spider";

Promise.all([buscarHeroePromise(heroeId1), buscarHeroePromise(heroeId2)])
  .then(([heroe1, heroe2]) => {
    console.log(`Enviando a ${heroe1.nombre} y ${heroe2.nombre} a la mision`);
  })
  .catch((err) => {
    console.error(err);
  }).finally(() => {
      console.log('Se termino el promise.all');
  });
