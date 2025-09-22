import { useCallback, useState } from 'react'
import ListNros from './ListNros'






const PruebaUseCallback = () => {
    const [number, setNumber] = useState<number>(1)
    const [dark, setDark] = useState<boolean>(false)
    
/* Asi hacia que se ejecute el useEffect cada vez que se actualizaba el theme
    const getItems = () => {
        return [number, number+1, number+2];
    }
*/

const getItems = useCallback(() => {
        return [number, number+1, number+2]
    }, [number])

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }
  return (
    <>
        <div>PruebaUseCallback</div>
        <div style={theme}>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Theme</button>
            <ListNros fnGetItems={getItems} />
        </div>
    </>
  )
}

export default PruebaUseCallback