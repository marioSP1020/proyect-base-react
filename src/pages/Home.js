import React, { useEffect, useState } from 'react';
import { getSongs } from '../lib/api';

const Home = () => {
  const [songs, setSongs] = useState([]); //la respuesta es un array

  const fetchAllsongs = async () => {
    const songsData = await getSongs('tupac');
    setSongs(songsData);
  };

  useEffect(() => {
    fetchAllsongs();
  }, []);

  return (
    <main className="page home">
      <h2>Soy el Home</h2>

      {songs.map((song) => {
        return (
          <article key={song.id}>
            <h3>Song title: {song.title}</h3>
            <p>{song.name}</p>
          </article>
        );
      })}
    </main>
  );
};

export default Home;
