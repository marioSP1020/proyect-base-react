import React, { useEffect, useState } from 'react';
import { getSongs } from '../lib/api';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [songs, setSongs] = useState([]);
  const [searchString, setSearchString] = useState('');

  const history = useHistory()
  


  const fetchAllsongs = async (artist) => {
    try {
    const songsData = await getSongs(artist);
      setSongs(songsData);
    } catch {
      history.push('/error')
    }
    
  };

  useEffect(() => {
    fetchAllsongs();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault()
    fetchAllsongs(searchString)
  }

  const handleChange = (event) => {
    const searchItem = event.currentTarget.value.toLowerCase()
    setSearchString(searchItem)
    console.log(searchItem);
  }



  return (
    <main className="page-home">
      <div></div>
      <form onSubmit={handleSubmit}>
            <label className="cambio" for="search"> Search songs</label>
        <input className="recambio" type="search"
          id="search"
          placeholder="artist to search"
          value={searchString}
          onChange={handleChange} />
        <button>submit</button>
          </form>
          

      {songs.map((song) => {
        return (                    
         <article key={song.id}>  
              <h3> {song.title}</h3>
          </article>
          

        );
      })}
    </main>
  );
};

export default Home;
