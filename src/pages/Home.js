import React, { useEffect, useState } from 'react';
import { getSongs } from '../lib/api';

const Home = () => {
  const [songs, setSongs] = useState([]);

  const fetchAllsongs = async () => {
    const songsData = await getSongs('the police');
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
          </article>
        );
      })}
    </main>
  );
};

export default Home;
