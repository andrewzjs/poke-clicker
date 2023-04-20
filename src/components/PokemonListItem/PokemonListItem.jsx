
export default function PokemonListItem({pokemon, index}) {
    return (
        <div>
            <tr>
                <td className="sprite-table" style={{
                    backgroundImage: `url(${pokemon.sprite})`, 
                    backgroundRepeat: "no-repeat",
                    width: "40%",
                    // animation: "updown 3s infinite",  
                    }}></td>
                <td className="pokemon-name-table">{pokemon.name}</td>
                <td>
                  <button className="button-table" > Details </button>
                  <button className="button-table"> Release </button>
                </td>
              </tr>
        </div>
    )
}