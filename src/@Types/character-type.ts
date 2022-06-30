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

export type Characters = {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
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
