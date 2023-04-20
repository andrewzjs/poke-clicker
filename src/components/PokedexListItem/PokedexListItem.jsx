export default function PokedexListItem({ pokemon, handleRemovePokemon }){
    return(
        <>
            <div>thing </div>
            <div>{ pokemon.name }</div>
                <div>{pokemon._id}</div>
            <button onClick={()=>handleRemovePokemon(pokemon._id)}>remove Pokemon</button>
        </>
    )
}