import React from 'react'
import { Link } from 'react-router-dom'


export default function infoTotalProyecto() {
    return (
        <div class="container">
            <div for="" class="container--flex">
                <label class="form__label">Nombre</label>
                <input type="text" class="form__input"></input>
            </div>
      
            <div class="container--flex">
                <label class="form__label">Objetivo General</label>
                <input type="text" class="form__input"></input>
            </div>   
            
            <div class="container--flex">
                <label class="form__label">Objetivos Específicos</label>
                 <input type="text" class="form__input"></input>
            </div>
    
            <div class="container--flex">
                <label class="form__label">Presupuesto</label>
                <input type="text" class="form__input"></input>
            </div>
       
            <div class="container--flex">
                <label class="form__label">Fecha de Inicio</label>
                <input type="text" class="form__input"></input>
            </div>
        
            <div class="container--flex">
                <label class="form__label">Fecha de Finalización</label>
                <input type="text" class="form__input"></input>
            </div>
    
            <div class="container--flex">
                <label class="form__label">Líder</label>
                <input type="text" class="form__input"></input>
            </div>
            
   
            <div class="container--flex">
                <label class="form__label">Estado</label>
                <input type="text"></input>
            </div>
    
            <div class="container--flex">
                <label class="form__label">Fase</label>
                <input type="text"></input>
            </div>
        

            <div class="botones">
                <Link to="/Register">
                <button>Actualizar</button> 
                </Link>
                <button>Inscribirse</button>
            </div>
        </div>
    )
}