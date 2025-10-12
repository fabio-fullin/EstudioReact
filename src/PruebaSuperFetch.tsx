import React from 'react'
import { useGeneralFetch } from './hooks/useGeneralFetch';

const PruebaSuperFetch = () => {

    type Peliculas = 
    {   
        "Search": [
            {
            "Title": string,
            "Year": string,
            "imdbID": string,
            "Type": string,
            "Poster": string
            }
    ]
        
    }

    
    const { data } = useGeneralFetch<Peliculas>('https://www.omdbapi.com/?i=tt3896198&apikey=d42d43a3&S=avengers');

  return (
    <>
    <div>PruebaSuperFetch</div>

    {
        data?.Search?.map(
            (pelicula) => 
            (
                <div key={pelicula.imdbID}>
                    <div>{pelicula.Title}</div>
                    <div>{pelicula.Year}</div>
                    <div>{pelicula.Type}</div>
                    <img style={{width: '200px'}} src={pelicula.Poster} alt={pelicula.Title} />
                </div>
            )
        )
    }





    </>
    )
}
    

export default PruebaSuperFetch;