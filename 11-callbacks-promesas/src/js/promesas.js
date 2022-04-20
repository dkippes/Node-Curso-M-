const heroes = {
    capi: {
        nombre: 'Capitan America',
        poder: 'Aguntar inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder: 'Mucho dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder: 'La mejor reaccin alergica a las picaduras'
    },
}

export const buscarHeroe = (id) => {
    const heroe = heroes[id];

    return new Promise((resolve, reject) => {
        if (heroe) {
            resolve(heroe);
        } else {
            reject(`No existe un heroe con el id ${id}`)
        }
    });
}