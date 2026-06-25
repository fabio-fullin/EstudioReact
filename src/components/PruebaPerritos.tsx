import type { ReactElement } from 'react';
import { useGeneralFetch } from '../hooks/useGeneralFetch';

type DogResponse = {
    message: string
}

const PruebaPerritos = (): ReactElement => {
    const { data: dogData, loading, error, refetch } = useGeneralFetch<DogResponse>('https://dog.ceo/api/breeds/image/random');

    function handleClick(): void {
        if (!loading) {
            refetch();
        }
    }

    if (error) {
        return (
            <div style={{ padding: '10px', color: 'red' }}>
                Error: {error.message}
                <button onClick={handleClick} style={{ marginLeft: '10px' }}>
                    Reintentar
                </button>
            </div>
        );
    }

    const estilo = {
        est: {
            color: 'blue'
        }
    }

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2 style={{ ...estilo.est }}>Perrito Aleatorio</h2>

            {loading && <p>Cargando...</p>}
            {!loading && <p>Completado.</p>}

            <div
                style={{
                    margin: '20px 0',
                    width: '200px',
                    height: '200px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    display: 'inline-block',
                    backgroundColor: '#eee'
                }}>
                {dogData ? (
                    <img
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                        }}
                        src={dogData.message}
                        alt="Perrito aleatorio"
                    />
                ) : (
                    <span style={{ lineHeight: '200px', color: '#aaa' }}>Imagen futura...</span>
                )}
            </div>
            <br />
            <button
                onClick={handleClick}
                disabled={loading}
                style={{
                    padding: '10px 20px',
                    backgroundColor: loading ? '#ccc' : '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: loading ? 'not-allowed' : 'pointer'
                }}
            >
                {loading ? 'Cargando...' : 'Cambiar foto de perrito'}
            </button>
        </div>
    );
};

export default PruebaPerritos;
