import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
//        console.log(e.target.value); //esto nos sirve para modificar el texto del input
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //preventDefault es para que la pagina no haga refresh cuando apretamos el enter, sino se actualiza al valor por defecto
        //el input en este caso hola mundo, y no es lo que quermos
        if(inputValue.trim().length > 0){ //la palabra debe tener al menos 1 letra, asi no puedo mandar categoria vacia, trim() corta los espacios adelante y atras como caracteres 
        setCategories(categories => [inputValue, ...categories]) 
        setInputValue('');
        }
    }
    
    return (
        <>
        <form onSubmit= {handleSubmit}>
             <input 
            type='text' // tipo de datos en el input
            value = {inputValue} //texto por defecto en el input
            onChange = {handleInputChange} //onChange nos permite que cambie el input.
          /> 
        </form>        

        </>//puedo quitar este fragment porque solo el formulario contendra a todos los inputs
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
} //addcategory de tipo func es requerido, es obligatorio.