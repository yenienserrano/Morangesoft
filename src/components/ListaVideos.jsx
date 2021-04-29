import React from 'react'
import '../styles/styles.css'

export const ListaVideos = ({url, img, titulo, setVideoActivo}) => {
    return (
        <div className='containerVideos' onClick={() => setVideoActivo(url)}>
            <img src={img} alt={titulo} width='200' height='130'/>
            <h4>{titulo}</h4>
        </div>
    )
}
