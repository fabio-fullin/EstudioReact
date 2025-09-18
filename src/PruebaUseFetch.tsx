import React, { type ReactNode } from 'react'
import { useFetch } from './useFetch'

interface CharacterImage {
  id: number;
  image: string;
  name: string;
}
interface ApiResponse {
  results: CharacterImage[];
}

export const PruebaUseFetch = () => {

const x = useFetch<ApiResponse>('https://rickandmortyapi.com/api/character');

  return (
    <>
     <div>PruebaUseFetch</div>
     {x.loading}
     <div>
        {x.data?.results.map((c) => {
            return (
            <pre>{c.name}</pre>
            )
        })}
     </div>
    </>
    
  )
}

export default PruebaUseFetch