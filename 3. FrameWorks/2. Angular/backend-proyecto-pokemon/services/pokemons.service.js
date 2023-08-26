class PokemonService{
    favorites = [];

    getAll(){
        return this.favorites;
    }
}

const pokemonService = new PokemonService();

module.exports = pokemonService;