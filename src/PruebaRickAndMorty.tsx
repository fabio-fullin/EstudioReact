import React, { useEffect, useState } from 'react'


/* Interfaces completas segun la url

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

*/



interface CharacterImage {
  id: number;
  image: string;
  name: string;
}
interface ApiResponse {
  results: CharacterImage[];
}

const PruebaRickAndMorty = () => {

   const [images, setImages] = useState<CharacterImage[]>([]);

  useEffect(() => {
    const fetchImages = async (): Promise<void> => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        //esta es la api general: https://rickandmortyapi.com/api
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data: ApiResponse = await response.json();
        setImages(data.results);
      } catch (err) {
      } finally {
      }
    };

    fetchImages();
  }, []);


  return (
    <>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 0.7fr)', gap: '10px', margin: '20px' }}>
    {
        images.map(
            (c) => {
                return (
                    <div>
                        <img 
                            key={c.id} 
                            src={c.image} 
                            alt={c.name}
                            style={{ width: '80%', borderRadius: '8px' }}
                        />
                        <div>{c.name}</div>
                    </div>
                )
            }
        )
    }
    </div>
    </>
  )
}




export default PruebaRickAndMorty