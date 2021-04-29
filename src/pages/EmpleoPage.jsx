import React, { useState } from 'react'
import '../styles/styles.css'

export const EmpleoPage = () => {

    const [enviado, setEnviado] = useState(false)
    const [formulario, setFormulario] = useState({
        email: '',
        nombre: '',
        apellido: '',
        empresa: '',
        telefono: '',
    })
    const [error, setError] = useState('')

    const {nombre, apellido, email, empresa, telefono} = formulario

    const onChangeText = (value, text) => {

        if(enviado){
            setEnviado(false)
        }
        setFormulario({...formulario, [text]: value})
    }

    const submit = (e) => {
        e.preventDefault()

        if(email.length <= 0){
            setEnviado(false)
            return setError('El email no tiene que estar vacio')
        }
        if(nombre.length <= 0){
            setEnviado(false)
            return setError('El nombre no tiene que estar vacio')
        }
        if(apellido.length <= 0){
            setEnviado(false)
            return setError('El apellido no tiene que estar vacio')
        }
        if(empresa.length <= 0){
            setEnviado(false)
            return setError('La empresa no tiene que estar vacia')
        }
        if(telefono.length <= 0){
            setEnviado(false)
            return setError('El telefono no tiene que estar vacio')
        }

        setError('')
        setEnviado(true)
    }

    return (
        <div className='empleoPage'>
            <h1>Empleo</h1>
            {
                enviado
                &&
                <p className='alert alert-success'>Hola {nombre} {apellido}, su formulario fue enviado correctamente</p>
            }
            {
                error
                &&
                <p className='alert alert-danger'>{error}</p>
            }
            <form className='d-flex flex-column align-items-center container-formulario'>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="email">Email</span>
                    </div>
                    <input type="email" className="form-control" aria-label="Email" aria-describedby="email" onChange={(e) => onChangeText(e.target.value, 'email')} placeholder='Email'/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="nombre">Nombre</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Nombre" aria-describedby="nombre" onChange={(e) => onChangeText(e.target.value, 'nombre')} placeholder='Nombre'/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="email">Apellido</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Apellido" aria-describedby="apellido" onChange={(e) => onChangeText(e.target.value, 'apellido')} placeholder='Apellido'/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="email">Empresa</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Empresa" aria-describedby="empresa" onChange={(e) => onChangeText(e.target.value, 'empresa')} placeholder='Empresa'/>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="email">Telefono</span>
                    </div>
                    <input type="text" className="form-control" aria-label="Telefono" aria-describedby="telefono" onChange={(e) => onChangeText(e.target.value, 'telefono')} placeholder='Telefono'/>
                </div>
                <input type="submit" value='Enviar' className='btn btn-success m-2' onClick={(e) => submit(e)} />
            </form>
            
        </div>
    )
}
