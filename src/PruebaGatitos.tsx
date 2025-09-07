import { useGeneralFetch } from './hooks/useGeneralFetch';

type FotoType = {
    url: string
}

const PruebaGatitos = () => {
    const { data: imageUrl, loading, error, refetch } = useGeneralFetch<FotoType>('https://cataas.com/cat?json=true');

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

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Gatito Aleatorio</h2>
            
            {loading && <p>Cargando...</p>}
            {!loading && <p>Completado.</p>}
            
            {imageUrl && (
                <div style={{ margin: '20px 0' }}>
                    <img 
                        style={{ 
                            width: '200px', 
                            height: '200px', 
                            objectFit: 'cover',
                            borderRadius: '10px',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
                        }} 
                        src={imageUrl.url} 
                        alt="Gatito aleatorio"
                    />
                </div>
            )}
            
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
                {loading ? 'Cargando...' : 'Cambiar foto'}
            </button>
        </div>
    );
}

export default PruebaGatitos;