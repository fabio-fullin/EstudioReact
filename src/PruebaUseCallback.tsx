import { useCallback, useState, type ReactElement } from 'react'
import ListNros from './ListNros'






const PruebaUseCallback = (): ReactElement => {
    const [number, setNumber] = useState<number>(5)
    const [dark, setDark] = useState<boolean>(false)
    
/* Asi hacia que se ejecute el useEffect cada vez que se actualizaba el theme
    const getItems = () => {
        return [number, number+1, number+2];
    }
*/

/* Aca el getItems queda como un callback que solo se ejecuta cuando el number cambia y no como antes que se ejecutaba siempre porque 
cuando entraba en el PruebaUseCallBack() se ejecutaba siempre y getItems era una funcion nueva cada vez. Entonces como cada vez es 
una funcion nueva el useEffect de ListNros se ejecuta siempre. 
*/
const getItems = useCallback((incremento:number) => {
        return [number, number+incremento, number+incremento+incremento]
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
            <button onClick={() => setDark(prevDark => !prevDark)} className='bg-amber-400 rounded-xl px-2 py-2 cursor-pointer'>Toggle Theme</button>
            <ListNros fnGetItems={getItems} />
        </div>
    </>
  )
}

export default PruebaUseCallback