import React, { useEffect, useState } from 'react';
import { getSongs } from '../lib/api';
import { useHistory } from 'react-router-dom';
import Article from '../components/Article';

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
    fetchAllsongs('the police');
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
    <main >
      
      <form onSubmit={handleSubmit}>
            <label className="cambio" for="search"> Search songs</label>
        <input className="recambio" type="search"
          id="search"
          placeholder="artist to search"
          value={searchString}
          onChange={handleChange} />
         <button>submit</button>
      </form> 
      
      <div className="page-home">
      {songs.map((song) => {
                            
         return(
          <article key={song.id}>  
              <h3> {song.title}</h3>
          </article>
         )
      })}
      </div>
      
    </main>
  );
};

export default Home;


/*
<article key={song.id}>  
              <h3> {song.title}</h3>
          </article>


{songs.map((song) => {
                            
         return(
          <article key={song.id}>  
              <h3> {song.title}</h3>
          </article>
         )
      })}




*/