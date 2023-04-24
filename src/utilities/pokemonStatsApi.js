import sendRequest from "./sendRequest";

const BASE_URL = '/api/pokemonStats'

export function createPokemonStats(newPokemonStats, pokemonId){
    return sendRequest(`${BASE_URL}/create`, 'POST', { newPokemonStats, pokemonId })
}

export function getOne(id){
    return sendRequest(`${BASE_URL}/${id}`)
}

export function getAll() {
    return sendRequest(BASE_URL)
}
