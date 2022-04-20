const heroes = {
  capi: {
    nombre: "Capitan America",
    poder: "Aguntar inyecciones sin morir",
  },
  iron: {
    nombre: "Ironman",
    poder: "Mucho dinero",
  },
  spider: {
    nombre: "Spiderman",
    poder: "La mejor reaccin alergica a las picaduras",
  },
};

export const buscarHeroe = (id) => {
  const heroe = heroes[id];

  return new Promise((resolve, reject) => {
    if (heroe) {
      resolve(heroe);
    } else {
      reject(`No existe un heroe con el id ${id}`);
    }
  });
};

export const buscarHeroeAsync = async (id) => {
  const heroe = heroes[id];

  if (heroe) {
    return heroe;
  } else {
    throw Error(`No existe un heroe con el id ${id}`);
  }
};

const promesaLenta = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promesa Lenta", 2000));
});

const promesaMedia = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promesa Lenta", 1500));
});

const promesaRapida = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Promesa Lenta", 1000));
});

export { promesaLenta, promesaMedia, promesaRapida };
