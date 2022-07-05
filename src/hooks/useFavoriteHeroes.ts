import { useEffect, useState } from 'react';

import { CharactersFavorite } from '@Types/character-type';

export function useFavoriteHeroes() {
  const [myFavorites, setMyFavorites] = useState<CharactersFavorite[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const favoriteHeroes = localStorage.getItem('heroes-marvel');

    if (favoriteHeroes) {
      const favorite = JSON.parse(favoriteHeroes);
      setMyFavorites(favorite);
    }

    if (!favoriteHeroes) {
      alert('ATULIZOU A PRIMEIRA VEZ');
      localStorage.setItem('heroes-marvel', JSON.stringify([]));
    }

    return () => controller.abort();
  }, []);

  function handleSelectFavoriteHeroes(character: CharactersFavorite) {
    const favoriteHeroes = localStorage.getItem('heroes-marvel');
    const convertList = JSON.parse(favoriteHeroes || '');
    convertList.push(character);

    const isMyFavorite = myFavorites.find((characterFilters) => {
      return character.id === characterFilters.id;
    });

    if (isMyFavorite?.id === character.id) {
      const results = myFavorites.filter((idHero: CharactersFavorite) => {
        return idHero.id !== character.id;
      });

      localStorage.setItem('heroes-marvel', JSON.stringify(results));
      setMyFavorites(results);
      return;
    }

    if (myFavorites.length === 5) {
      alert('JÁ atingiu o limite máximo');
      return;
    }

    localStorage.setItem('heroes-marvel', JSON.stringify(convertList));
    setMyFavorites(() => [...myFavorites, character]);
  }

  return { myFavorites, handleSelectFavoriteHeroes };
}
