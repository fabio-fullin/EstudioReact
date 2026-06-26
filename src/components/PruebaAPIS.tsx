import type { ReactElement } from 'react';
import { useState } from 'react';
import { useGeneralFetch } from '../hooks/useGeneralFetch';

type FotoType = {
    url: string
}

type DogResponse = {
    message: string
}

type HeroResponse = {
    results?: Array<{
        name: {
            first: string
            last: string
        }
        picture: {
            large: string
        }
    }>
}

type ContentType = 'gatitos' | 'perritos' | 'dc-heroes';

const PruebaAPIS = (): ReactElement => {
    const [contentType, setContentType] = useState<ContentType>('gatitos');
    const [refreshKey, setRefreshKey] = useState<number>(0);
    
    const isGatitos = contentType === 'gatitos';
    const isPerritos = contentType === 'perritos';
    const isDCHeroes = contentType === 'dc-heroes';
    
    const getApiUrl = (): string => {
        if (isGatitos) {
            return `https://cataas.com/cat?json=true&_t=${refreshKey}`;
        } else if (isPerritos) {
            return `https://dog.ceo/api/breeds/image/random?_t=${refreshKey}`;
        } else {
            return `https://randomuser.me/api/?_t=${refreshKey}`;
        }
    };
    
    const apiUrl = getApiUrl();
    const { data: rawData, loading, error, refetch } = useGeneralFetch<FotoType | DogResponse | HeroResponse>(apiUrl);

    function handleClick(): void {
        if (!loading) {
            setRefreshKey(prev => prev + 1);
        }
    }

    function handleContentChange(type: ContentType): void {
        setContentType(type);
        setRefreshKey(0);
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
        container: {
            padding: '20px',
            textAlign: 'center' as const
        },
        selector: {
            marginBottom: '20px',
            display: 'flex',
            gap: '10px',
            justifyContent: 'center'
        },
        selectDropdown: {
            padding: '10px 15px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '2px solid #ccc',
            cursor: 'pointer',
            backgroundColor: 'white',
            color: '#333',
            fontWeight: 'bold'
        },
        title: {
            color: isGatitos ? 'red' : isPerritos ? 'blue' : '#FFB81C'
        },
        imageContainer: {
            margin: '20px 0',
            width: '200px',
            height: '200px',
            borderRadius: '10px',
            overflow: 'hidden' as const,
            display: 'inline-block',
            backgroundColor: '#eee'
        },
        image: {
            width: '100%',
            height: '100%',
            objectFit: 'cover' as const
        },
        button: {
            padding: '10px 20px',
            backgroundColor: loading ? '#ccc' : '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
        }
    };

    const title = isGatitos ? 'Gatito Aleatorio' : isPerritos ? 'Perrito Aleatorio' : 'Persona Aleatoria';
    const buttonText = isGatitos 
        ? (loading ? 'Cargando...' : 'Cambiar foto')
        : isPerritos
        ? (loading ? 'Cargando...' : 'Cambiar foto de perrito')
        : (loading ? 'Cargando...' : 'Cambiar persona');
    
    let imageUrl = '';
    let heroName = '';
    if (rawData) {
        if (isGatitos) {
            imageUrl = (rawData as FotoType).url;
        } else if (isPerritos) {
            imageUrl = (rawData as DogResponse).message;
        } else if (isDCHeroes) {
            const userData = rawData as HeroResponse;
            if (userData.results && userData.results[0]) {
                const user = userData.results[0];
                imageUrl = user.picture?.large || '';
                heroName = `${user.name?.first || ''} ${user.name?.last || ''}`;
            }
        }
    }

    return (
        <div style={estilo.container}>
        <div style={estilo.selector}>
                <label htmlFor="contentSelect" style={{ marginRight: '10px', fontWeight: 'bold' }}>
                    Selecciona un contenido:
                </label>
                <select
                    id="contentSelect"
                    value={contentType}
                    onChange={(e) => handleContentChange(e.target.value as ContentType)}
                    style={estilo.selectDropdown}
                >
                    <option value="gatitos">🐱 Gatitos</option>
                    <option value="perritos">🐕 Perritos</option>
                    <option value="dc-heroes">👤 Persona</option>
                </select>
            </div>

            <h2 style={estilo.title}>{title}</h2>
            {isDCHeroes && heroName && <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>{heroName}</p>}

            {loading && <p>Cargando...</p>}
            {!loading && <p>Completado.</p>}

            <div style={estilo.imageContainer}>
                {imageUrl ? (
                    <img
                        style={estilo.image}
                        src={imageUrl}
                        alt={isGatitos ? 'Gatito aleatorio' : isPerritos ? 'Perrito aleatorio' : 'DC Hero'}
                    />
                ) : (
                    <span style={{ lineHeight: '200px', color: '#aaa' }}>Imagen futura...</span>
                )}
            </div>
            <br />
            <button
                onClick={handleClick}
                disabled={loading}
                style={estilo.button}
            >
                {buttonText}
            </button>
        </div>
    );
};

export default PruebaAPIS;
