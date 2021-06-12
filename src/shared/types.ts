export interface Character {
  id: string;
  image: string;
  name: string;
  species: string;
}

export interface CharacterDetails {
  id: string;
  image: string;
  name: string;
  species: string;
  gender: string;
  location: {
    name: string;
  };
  status: string;
  episode: Episode[];
}

interface Episode {
  id: string;
  name: string;
  episode: string;
  air_date: string;
}
