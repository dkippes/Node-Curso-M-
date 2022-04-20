const jokeUrl = 'https://api.chucknorris.io/jokes/random'

const obtenerChiste = async () => {

    try {
        const resp = await fetch(jokeUrl);
        const {icon_url, id, value} = await resp.json();
        return {icon_url, id, value} ;
    } catch(err) {
        throw Error(`No se pudo realizar la peticion`)
    }
}

export {
    obtenerChiste
}