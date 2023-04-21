import sendRequest from "./sendRequest";

const BASE_URL = '/api/pokedex'

export function createPokedexEntry(newPokedexEntry){
    return sendRequest(`${BASE_URL}/create`, 'POST', { newPokedexEntry })
}

export function getAll() {
    return sendRequest(BASE_URL)
}