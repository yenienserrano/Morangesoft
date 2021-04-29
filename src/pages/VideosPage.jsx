import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { ListaVideos } from '../components/ListaVideos'
import {videos} from '../videos'

export const VideosPage = () => {

    const grupoVideos = videos

    const [videoActivo, setVideoActivo] = useState('')

    return (
        <div className='videoPage'>
            { videoActivo &&
                <div className='video'>
                    <ReactPlayer url={videoActivo} playing controls/>
                </div>
            }
            <h1>Musica</h1>
            <div className='containerLista'>
                {
                    grupoVideos.map( (v, i) => v.genero === 'musica' && <ListaVideos setVideoActivo={setVideoActivo} key={i} img={v.img} titulo={v.titulo} url={v.url} />)
                }
            </div>
            <h1>Juegos</h1>
            <div className='containerLista'>
                {
                    grupoVideos.map( (v, i) => v.genero === 'juegos' && <ListaVideos setVideoActivo={setVideoActivo} key={i} img={v.img} titulo={v.titulo} url={v.url} />)
                }
            </div>
        </div>
    )
}
