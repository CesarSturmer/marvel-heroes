import { CharactersFavorite, Characters } from '@Types/character-type';

export const validateIsMyFavorite = (
  myFavorites: CharactersFavorite[],
  character: CharactersFavorite | Characters
) => {
  const isMyFavorite = myFavorites.find((characterFilters) => {
    return character.id === characterFilters.id;
  });

  return isMyFavorite;
};
