import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

//Custom hook, funcionan como funcional componenents, pueden tener efectos, usar reducer, etc. 


export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs(category)
        .then(imgs => {
            setState({
                data: imgs,
                loading: false
            });
        })

    },[category])

    return state;
}