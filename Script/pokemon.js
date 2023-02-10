const pokemonName = document.querySelector('.pokemon_name');
const pokemonId = document.querySelector('.pokemon_id');
const pokemonImage = document.querySelector('.pokemon_image');

const fetchPokemon = async (pokemon) => {

    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    if (APIResponse.status === 200){
        const data = await APIResponse.json();
        return data;   
    }
    else{
        console.log("Erro de nome ou id")
    }
}
const renderPokemon = async (pokemon) => {

    pokemonName.innerHTML = 'carregando...';
    pokemonId.innerHTML = '';
    
    const data = await fetchPokemon(pokemon);
    if (data)
    {    
        pokemonName.innerHTML = data.name;
        pokemonId.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    }
    else
    {
        pokemonName.innerHTML = "Não encontrado";
        pokemonId.innerHTML = '';
    }

}
renderPokemon('1');