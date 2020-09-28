import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';

function App() {

  //state global con los datos de la consulta al formulario
  const [consutaform, setConsutaform] = useState({})

  const [letracancion, setLetracancion] = useState('')

  const [infoartista, setinfoArtista] = useState({})
  
  //consultar API una vez que tengo los datos del form
  useEffect(() => {
    //NO deja que se ejecute al iniciar la app
    if( Object.keys(consutaform).length === 0 ) return;
    
    const consultarLetraAPI= async()=>{
      const {artista, cancion} = consutaform;
      const url1 = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const url2= `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`

      const [letra, info] = await Promise.all([
        axios(url1),
        axios(url2)
      ])
     
      setLetracancion(letra.data.lyrics);
      setinfoArtista(info.data)
    }
    consultarLetraAPI()
  }, [consutaform])


  return (
    <>
      <Formulario
        setConsutaform={setConsutaform}
      />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Info
              infoartista={ infoartista }
            />
          </div>
          <div className="col-md-6">
            <Cancion
              letracancion={ letracancion }
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
