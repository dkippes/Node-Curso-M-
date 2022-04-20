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

export const buscarHeroe = (id, callback) => {
    const heroe = heroes[id];

    if (heroe) {
        callback(null, heroe);
    } else {
        callback(`No existe un heroe con el id ${id}`);
    }
}