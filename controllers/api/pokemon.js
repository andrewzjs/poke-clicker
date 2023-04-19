import axios from "axios"


module.exports = {
    newPokemon,
}

async function newPokemon(req, res) {
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
        console.log(response.data)
        console.log(Object.values(response.data)[1])
        const pokemonTypes = await PokemonType.find({})
        console.log(pokemonTypes)
        res.render("pokemons/new", {pokemons: response.data.results})

    } catch(err) {
        console.log(err)
    }
}
