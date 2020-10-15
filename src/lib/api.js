const BASE_URL = 'https://www.songsterr.com/a/ra/songs.json';

//www.songsterr.com/a/ra/songs.json?pattern=Marley
export const getSongs = async (query) => {  //peticion dinamica pq paso un query
  const response = await fetch(`${BASE_URL}?pattern=${query}`);
  const data = await response.json();
  return data;
};





// const UNIQUE_RESOURCE = 'https://cat-fact.herokuapp.com.json';

// export const getCats = async(query) = {
//   const response = await fetch(`${UNIQUE_RESOURCE}?pattern=${query}`);
//   const data = await response.json();
//   return data;
// }