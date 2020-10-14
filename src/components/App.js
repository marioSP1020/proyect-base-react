import React from 'react';
import Header from '../components/Header.js';


class App extends React.Component {
  state = {
    song: [],
  }

//Si necesita cargar datos desde un punto final remoto, este es un buen lugar para instanciar la solicitud de red.
  async componentDidMount() {
    const res = await fetch('http://www.songsterr.com/a/ra/songs.json?pattern=Marley');
    const song = await res.json();
    console.log(song);
    this.setState({ song });
  }

  render(){

    return (
      <div>
        <p>
          {this.state.song[0] type }
          {/* key={song.type} */}
          <h1>hola</h1>
        </p>
      </div>
    );

  }
}

export default App;

//Datos que podemos obtener de el API
//  {
//         "id": 259,
//         "type": "Song",
//         "title": "Redemption Song",
//         "artist": {
//             "id": 58,
//             "type": "Artist",
//             "nameWithoutThePrefix": "Bob Marley",
//             "useThePrefix": false,
//             "name": "Bob Marley"
//         },
//         "chordsPresent": true,
//         "tabTypes": [
//             "PLAYER",
//             "TEXT_GUITAR_TAB",
//             "CHORDS",
//             "TEXT_BASS_TAB"
//         ]
//     },