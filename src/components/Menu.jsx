import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'


export const Menu = () => {
    return (
        <div className='menu'>
            <div className='containerPages'>
                <h1>Paginas</h1>
                
                <Link to='/home' className='link'>Home</Link>
            
                <Link to='/liderazgo' className='link'>Liderazgo</Link>
            
                <Link to='/about' className='link'>About</Link>
            
                <Link to='/empleo' className='link'>Empleo</Link>
            </div>
        </div>
    )
}
