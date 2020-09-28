import React from 'react'
import PropTypes from 'prop-types'

const Info = ({infoartista}) => {

    if(Object.keys(infoartista).length === 0 || infoartista.artists === null) return null
    
    const{strArtistThumb, strArtist, strGenre, strBiographyES,strBiographyEN, strFacebook, strTwitter, strLastFMChart}=infoartista.artists[0]
    
    
    return (
        <>
            <div className="card border-light">
                <div className="card-header bg-primary text-white font-weight-bold">
                    <h2>Información Artista</h2>
                </div>
                <div className="card-body">
                    <img
                        src={strArtistThumb}
                        alt={strArtist}
                    />
                    <p className="card-text">Género: {strGenre}</p>
                    <p className="card-text">Biografía:</p>
                    <p className="card-text">{strBiographyES === null ? (strBiographyEN) : (strBiographyES)}</p>
                    <p className="card-text">
                        <a href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href={`${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-lastfm"></i>
                        </a>
                    </p>


                
                </div>
            </div>
            
        </>
    )
    
}

Info.propTypes = {
    infoartista: PropTypes.object.isRequired
}

export default Info
