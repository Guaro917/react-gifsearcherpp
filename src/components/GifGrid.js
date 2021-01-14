import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';



export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]); esto tmb se paso al usefetchgifs de otra manera y por eso queda comentado, no lo uso aqui.
    const {data:images, loading}= useFetchGifs(category);

    // useEffect(() => {
    //     getGifs(category)
    //     .then(imgs => setImages(imgs)); // recordar aca puedo poner then(setImages); y es lo mismo porq la funcion solo toma un primer y unico argument
    //     }, [category])
        // en este caso la instruccion dentro que es getGifs se ejecuta unicamente cuando renderizamos por primera vez el componente
    // el segundo elemento que toma useEffect es una lista de dependencias si alguna esta presente el getGifs se ejecutaria otra vez, no es este el caso
    //por todo esto usamos useEffect en vez de dejarlo simplemente con el useState porque de ser asi, cada vez que modifiquemos algo
    //al volverse a renderizar volveria a ejecutar la instruccion getGifs(recordar q la eliminamos de la linea 33 justo antes del return)
    //esto se paso al useFetchGifs


//RECORDAR agregas a la <li></li> las imagenes

    return (
        <>
            <h3>{category}</h3>

            {loading ? <p>Loading</p> : null} 
            {/* esto tambien se puede hacer ocmo loading && <p>loading</p> porque evaluara el loading inicial, y solo si es true nos mostrara el parrafo, si es false no, por el operador AND */}

            <div className="card-grid">
                    {
                        images.map(img => { //renombramos la data en la desestructurazion con data: images
                            //return <li key = {img.id}>{img.title}</li> 
                            return <GifGridItem 
                            key={ img.id } 
                            {...img} // usamos el operador spread y eso nos permite desestructurar en GifGridItem haciendo {title,url}
                            //podria poner img={img} y sencillamente llamar a los props en el componente GifGridItem
                            />
                        })
                    }

            </div>
        </>//pongo este fragment porque sino sin el el return devolveria el h3 y el div, eso nos va a dar un error, por ello encerammos todo en el fragment obviamente.
    )
}
