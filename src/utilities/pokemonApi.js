import sendRequest from "./sendRequest";

const BASE_URL = '/api/pokemon'

export function createPokemon(newPokemon){
    return sendRequest(`${BASE_URL}/create`, 'POST', { newPokemon })
}

export function getOne(id){
    return sendRequest(`${BASE_URL}/${id}`)
}


export function getAll() {
    return sendRequest(BASE_URL)
}

export function deletePokemon(pokeId){
    return sendRequest(`${BASE_URL}/delete/${pokeId}`, 'DELETE' )
}

<<<<<<< HEAD
export function getUsersPokemon(userId){
    return sendRequest(`${BASE_URL}/user/${userId}`, 'GET')
=======
export function getOne(id) {
    return sendRequest(`${BASE_URL}/${id}`, 'GET')
>>>>>>> 0d34acb344750c6cd870da9c6d5c3ff04cb06fba
}