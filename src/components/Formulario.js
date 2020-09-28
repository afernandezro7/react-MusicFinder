import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Formulario = ({setConsutaform}) => {

    //state del formulario
    const [datosform, setDatosform] = useState({
        artista:'',
        cancion:''
    })
    const {artista,cancion}= datosform;

    //state de Error si los datos están vacios
    const [error, setError] = useState(false)

    //Manejar el onchange de cada input
    const handleChange = ({target}) =>{
        setDatosform({
            ...datosform,
            [target.name]:target.value
        })
    }

    //manejar submit del form
    const handleSubmit = e =>{
        e.preventDefault();
        
        //validar campos
        if(artista.trim()==='' || cancion.trim() ===''){
            setError(true)
            return;
        }
        //Enviar datos del formulario al componente principal
        setError(false)
        setConsutaform(datosform)
    }

    return (
      <div className="bg-info ">
        
        { error ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p>:null }
        
        <div className="container">
          <div className="row">
            <form 
                className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                onSubmit={ handleSubmit }
            >
              <fieldset>
                <legend className="text-center d-block mx-auto">Buscador Letras Canciones</legend>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                        <label>Artista</label>
                        <input
                            type="text"
                            className="form-control"
                            name="artista"
                            placeholder="Nombre Artista"
                            onChange={handleChange}
                            value={artista}    
                        />
                    </div>
                  </div>
                  <div className="col-md-6">           
                    <div className="form-group">
                        <label>Canción</label>
                        <input
                            type="text"
                            className="form-control"
                            name="cancion"
                            placeholder="Nombre de la Canción"
                            onChange={handleChange}
                            value={cancion} 
                        />
                    </div>
                  </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary float-right"
                >Buscar</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    );
}

Formulario.propTypes = {
    setConsutaform: PropTypes.func.isRequired
}

export default Formulario
