import React from 'react'
import PropTypes from 'prop-types'

const Cancion = ( { letracancion } ) => {


    if(letracancion.length === 0) return null

    return (
        <>
            <h2>Letra de la Canción</h2>
            <p className="letra">{ letracancion }</p>
        </>
    )
}

Cancion.propTypes = {
    letracancion: PropTypes.string.isRequired
}

export default Cancion
