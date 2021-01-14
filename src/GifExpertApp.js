import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['Rick & Morty'])//recordemos esto es el hook del useState
//el primer argumento es categories, luego el segundo argumento es la funcion que usamos para añadir categorias, y luego lo que esta despues
//del igual es el estado inicial de categories en este caso

//TAREA
    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter']); // usamos el operador spread para agregarlo, hay otras maneras
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr />  


            <ol>
                {
                categories.map(category => {
                    return <GifGrid 
                    key = {category} 
                    category = {category}
                    />
                })
                }
            </ol>

        </>
    )
}
