export type ItemsListCharactersObject = {
  available: number;
  collectionURI: string;
  items: ItemsListCharacters[];
  returned: number;
};

export type ItemsListCharacters = {
  resourceURI: string;
  name: string;
};

export type ThumbNail = {
  path: string;
  extension: string;
};

export type Characters = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: ThumbNail;
  resourceURI: string;
  comics: ItemsListCharactersObject;
  series: ItemsListCharactersObject;
  stories: ItemsListCharactersObject;
  events: ItemsListCharactersObject;
  urls: {
    type: string;
    url: string;
  };
};

export type CharactersFavorite = {
  id: number;
  thumbnail: {
    path: string;
    extension: string;
  };
  name: string;
};
