import React, { useEffect, useState } from 'react';
import { getSongs } from '../lib/api';

const Home = () => {
  const [songs, setSongs] = useState([]);

  const fetchAllsongs = async () => {
    const songsData = await getSongs("the police");
    setSongs(songsData);
  };

 


// element.onclick = functionRef;

  useEffect(() => {
    fetchAllsongs();
  }, []);

  return (
    <main className="page-home">
      <h2>Soy el Home</h2>

      {songs.map((song) => {
        return (                    
         <article key={song.id}>  
              <h3> {song.title}</h3>
          </article>
          
          // <div>
          //   <label for="search"> Search songs</label>
          //   <input type="search" id="search" placeholder="songs" />
          
          // </div>
        );
      })}
    </main>
  );
};

export default Home;
