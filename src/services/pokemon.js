const URL='https://pokeapi.co/api/v2/pokemon';

export async function getPokemons() {
    try {
        const response = await fetch(`${URL}`);
        const data = await response.json();
        return data;
} catch (error) {
    console.error("Mensaje");
}
}