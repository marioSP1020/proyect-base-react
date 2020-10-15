const BASE_URL = 'https://www.songsterr.com/a/ra/songs.json';

//www.songsterr.com/a/ra/songs.json?pattern=Marley
export const getSongs = async (query) => {
  const response = await fetch(`${BASE_URL}?pattern=${query}`);
  const data = await response.json();
  return data;
  
};

export const getFavorite = async (query) => {
  const response = await fetch(`${BASE_URL}?pattern=${query}`);
  const data = await response.json();
  return data;
}
