const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokemonId) => pokemonId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existsInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false;
  
  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
};

const favoritePokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
}

export default {
  toggleFavorite,
  existsInFavorites,
  favoritePokemons
};
