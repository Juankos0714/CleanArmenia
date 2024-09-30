// URL base de la API de Rick and Morty
const BASE_URL = 'https://rickandmortyapi.com/api';

// Función para obtener personajes
async function getCharacters(page = 1) {
  try {
    const response = await fetch(`${BASE_URL}/character?page=${page}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al obtener personajes:', error);
  }
}

// Función para obtener un personaje específico por ID
async function getCharacter(id) {
  try {
    const response = await fetch(`${BASE_URL}/character/${id}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error al obtener el personaje con ID ${id}:`, error);
  }
}

// Función para mostrar los personajes en la consola
function displayCharacters(characters) {
  characters.forEach(character => {
    console.log(`Nombre: ${character.name}`);
    console.log(`Estado: ${character.status}`);
    console.log(`Especie: ${character.species}`);
    console.log('-------------------------');
  });
}

// Función principal para ejecutar el cliente
async function main() {
  console.log('Obteniendo personajes de Rick and Morty...');
  const charactersData = await getCharacters();
  if (charactersData && charactersData.results) {
    displayCharacters(charactersData.results);
  }

  console.log('Obteniendo un personaje específico...');
  const characterId = 1; // Rick Sanchez
  const character = await getCharacter(characterId);
  if (character) {
    console.log('Personaje específico:');
    console.log(`Nombre: ${character.name}`);
    console.log(`Estado: ${character.status}`);
    console.log(`Especie: ${character.species}`);
  }
}

// Ejecutar el cliente
main();