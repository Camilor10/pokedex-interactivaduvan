const pokemonData = {
    fire: {
        title: "Tipo Fuego 🔥",
        pokemon: [
            { name: 'Charizard', image: 'https://img.pokemondb.net/artwork/charizard.jpg', desc: 'Charizard es un Pokémon de tipo Fuego/Volador. Conocido por su habilidad para volar y lanzar llamas.' },
            { name: 'Arcanine', image: 'https://img.pokemondb.net/artwork/arcanine.jpg', desc: 'Arcanine es un Pokémon de tipo Fuego. Es rápido y majestuoso, siempre leal a su entrenador.' },
            { name: 'Entei', image: 'https://img.pokemondb.net/artwork/entei.jpg', desc: 'Entei es un Pokémon legendario de tipo Fuego. Nació de la erupción de un volcán.' }
        ]
    },
    water: {
        title: "Tipo Agua 💧",
        pokemon: [
            { name: 'Blastoise', image: 'https://img.pokemondb.net/artwork/blastoise.jpg', desc: 'Blastoise es un Pokémon de tipo Agua, con poderosos cañones de agua en su espalda.' },
            { name: 'Gyarados', image: 'https://img.pokemondb.net/artwork/gyarados.jpg', desc: 'Gyarados es conocido por su furia incontrolable y su habilidad para crear devastadoras tormentas.' },
            { name: 'Lapras', image: 'https://img.pokemondb.net/artwork/lapras.jpg', desc: 'Lapras es un Pokémon dócil que transporta personas a través de los mares.' }
        ]
    },
    grass: {
        title: "Tipo Planta 🍃",
        pokemon: [
            { name: 'Venusaur', image: 'https://img.pokemondb.net/artwork/venusaur.jpg', desc: 'Venusaur es un Pokémon de tipo Planta/Veneno, su habilidad para absorber luz solar lo hace fuerte.' },
            { name: 'Leafeon', image: 'https://img.pokemondb.net/artwork/leafeon.jpg', desc: 'Leafeon es un Pokémon de tipo Planta, conocido por su conexión con la naturaleza.' },
            { name: 'Torterra', image: 'https://img.pokemondb.net/artwork/torterra.jpg', desc: 'Torterra es un Pokémon de tipo Planta/Tierra que lleva árboles en su espalda.' }
        ]
    },
    electric: {
        title: "Tipo Eléctrico ⚡",
        pokemon: [
            { name: 'Pikachu', image: 'https://img.pokemondb.net/artwork/pikachu.jpg', desc: 'Pikachu es un Pokémon de tipo Eléctrico. Es famoso por ser la mascota de la franquicia Pokémon.' },
            { name: 'Raichu', image: 'https://img.pokemondb.net/artwork/raichu.jpg', desc: 'Raichu es la evolución de Pikachu y tiene ataques eléctricos más fuertes.' },
            { name: 'Electabuzz', image: 'https://img.pokemondb.net/artwork/electabuzz.jpg', desc: 'Electabuzz es un Pokémon de tipo Eléctrico que genera poderosas descargas eléctricas.' }
        ]
    },
    ice: {
        title: "Tipo Hielo ❄️",
        pokemon: [
            { name: 'Glaceon', image: 'https://img.pokemondb.net/artwork/glaceon.jpg', desc: 'Glaceon es un Pokémon de tipo Hielo. Es elegante y tiene el poder de congelar la humedad del aire.' },
            { name: 'Articuno', image: 'https://img.pokemondb.net/artwork/articuno.jpg', desc: 'Articuno es un Pokémon legendario de tipo Hielo/Volador que domina las tormentas de nieve.' },
            { name: 'Lapras', image: 'https://img.pokemondb.net/artwork/lapras.jpg', desc: 'Lapras es un Pokémon de tipo Hielo/Agua que navega tranquilamente por los océanos fríos.' }
        ]
    },
    fairy: {
        title: "Tipo Hada ✨",
        pokemon: [
            { name: 'Jigglypuff', image: 'https://img.pokemondb.net/artwork/jigglypuff.jpg', desc: 'Jigglypuff es un Pokémon de tipo Hada/Normal, famoso por dormir a los enemigos con su canto.' },
            { name: 'Clefable', image: 'https://img.pokemondb.net/artwork/clefable.jpg', desc: 'Clefable es un Pokémon de tipo Hada, conocido por su naturaleza tierna y su increíble audición.' },
            { name: 'Togekiss', image: 'https://img.pokemondb.net/artwork/togekiss.jpg', desc: 'Togekiss es un Pokémon de tipo Hada/Volador que trae felicidad a los corazones de los entrenadores.' }
        ]
    },
    poison: {
        title: "Tipo Veneno ☠️",
        pokemon: [
            { name: 'Nidoking', image: 'https://img.pokemondb.net/artwork/nidoking.jpg', desc: 'Nidoking es un Pokémon de tipo Veneno/Tierra conocido por su gran fuerza física y su impresionante aspecto.' },
            { name: 'Gengar', image: 'https://img.pokemondb.net/artwork/gengar.jpg', desc: 'Gengar es un Pokémon de tipo Fantasma/Veneno, famoso por su capacidad para usar su sombra para asustar a sus enemigos.' },
            { name: 'Weezing', image: 'https://img.pokemondb.net/artwork/weezing.jpg', desc: 'Weezing es un Pokémon de tipo Veneno que emite gases tóxicos desde sus múltiples cabezas para atacar a sus enemigos.' },
            { name: 'Roselia', image: 'https://img.pokemondb.net/artwork/roselia.jpg', desc: 'Roselia es un Pokémon de tipo Planta/Veneno conocido por sus hermosas flores y su capacidad para lanzar espinas venenosas.' },
            { name: 'Croagunk', image: 'https://img.pokemondb.net/artwork/croagunk.jpg', desc: 'Croagunk es un Pokémon de tipo Siniestro/Veneno que utiliza su veneno para defenderse y tiene una apariencia bastante peculiar.' }
        ]
    }
};

// Lógica para manejar los clics en los tipos de Pokémon
const typeCards = document.querySelectorAll('.type-card');
const infoSection = document.getElementById('info-section');
const infoContent = document.getElementById('info-content');
const volverBtn = document.getElementById('volver-btn');

typeCards.forEach(card => {
    card.addEventListener('click', event => {
        const type = event.currentTarget.dataset.type;
        showPokemonInfo(type);
    });
});

volverBtn.addEventListener('click', () => {
    infoSection.classList.add('hidden');
    document.getElementById('main-section').classList.remove('hidden');
});

function showPokemonInfo(type) {
    const selectedType = pokemonData[type];
    infoContent.innerHTML = `
        <h2>${selectedType.title}</h2>
        <div class="pokemon-list">
            ${selectedType.pokemon.map(pokemon => `
                <div class="pokemon-item">
                    <img src="${pokemon.image}" alt="${pokemon.name}">
                    <h3>${pokemon.name}</h3>
                    <p>${pokemon.desc}</p>
                </div>
            `).join('')}
        </div>
    `;
    document.getElementById('main-section').classList.add('hidden');
    infoSection.classList.remove('hidden');
}
function changeBackground(type) {
    const body = document.body;
    
    switch(type) {
        case 'fire':
            body.style.backgroundImage = "url('https://url-a-tu-imagen-fuego.jpg')";
            break;
        case 'water':
            body.style.backgroundImage = "url('https://url-a-tu-imagen-agua.jpg')";
            break;
        case 'grass':
            body.style.backgroundImage = "url('https://url-a-tu-imagen-planta.jpg')";
            break;
        case 'electric':
            body.style.backgroundImage = "url('https://url-a-tu-imagen-electrico.jpg')";
            break;
        case 'ice':
            body.style.backgroundImage = "url('https://url-a-tu-imagen-hielo.jpg')";
            break;
        case 'fairy':
            body.style.backgroundImage = "url('https://url-a-tu-imagen-hada.jpg')";
            break;
        case 'poison':
            body.style.backgroundImage = "url('https://url-a-tu-imagen-veneno.jpg')";
            break;
        default:
            body.style.backgroundImage = "url('URL_DE_TU_IMAGEN')";
    }

    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
}
function changeBackground(type) {
    const body = document.body;

    // Cambiar el fondo según el tipo de Pokémon
switch (type) {
    case 'fire':
        body.style.backgroundImage = "url('https://img.pokemondb.net/artwork/large/charizard.jpg')";
        break;
    case 'water':
        body.style.backgroundImage = "url('https://img.pokemondb.net/artwork/large/blastoise.jpg')";
        break;
    case 'grass':
        body.style.backgroundImage = "url('https://img.pokemondb.net/artwork/large/venusaur.jpg')";
        break;
    case 'electric':
        body.style.backgroundImage = "url('https://img.pokemondb.net/artwork/large/pikachu.jpg')";
        break;
    case 'ice':
        body.style.backgroundImage = "url('https://img.pokemondb.net/artwork/large/articuno.jpg')";
        break;
    case 'fairy':
        body.style.backgroundImage = "url('https://img.pokemondb.net/artwork/large/togekiss.jpg')";
        break;
    case 'poison':
        body.style.backgroundImage = "url('https://img.pokemondb.net/artwork/large/nidoking.jpg')";
        break;
    default:
        body.style.backgroundImage = "url('https://img.pokemondb.net/artwork/large/bulbasaur.jpg')";
}

    // Asegúrate de que el fondo cubra toda la pantalla
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.backgroundRepeat = 'no-repeat';
}

// Función que muestra la información del tipo de Pokémon seleccionado
function showPokemonInfo(type) {
    const selectedType = pokemonData[type];
    infoContent.innerHTML = `
        <h2>${selectedType.title}</h2>
        <div class="pokemon-list">
            ${selectedType.pokemon.map(pokemon => `
                <div class="pokemon-item">
                    <img src="${pokemon.image}" alt="${pokemon.name}">
                    <h3>${pokemon.name}</h3>
                    <p>${pokemon.desc}</p>
                </div>
            `).join('')}
        </div>
    `;
    document.getElementById('main-section').classList.add('hidden');
    infoSection.classList.remove('hidden');

    // Cambiar el fondo cuando se selecciona un tipo de Pokémon
    changeBackground(type);
}
