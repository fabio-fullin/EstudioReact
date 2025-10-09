import { useEffect, useState, type ReactElement } from "react";
import { set } from "zod/v4";


export const PruebaUseEffect = ():ReactElement => {
    const [count, setCount] = useState<number>(0);
    const [apretado, setApretado] = useState<boolean>(false);

    const botonNormal = 'bg-blue-700 p-1 px-2 rounded-md '
    const botonApretado = 'bg-yellow-700 p-1 px-2 rounded-md '

    const handleClick = () => {
        setCount(count + 1);
    }
    useEffect(() => {
        setCount(count + 1);
    }, []);
  return (
    <>
        <div>PruebaUseEffect</div>
        <div>{count}</div>
        <div><button className={apretado ? botonApretado : botonNormal}  
        onClick={handleClick}
        onMouseDown={ () => setApretado(true)} 
        onMouseUp={() => setApretado(false)}
        >
            Suma 1
        </button></div>
    </>
  )
}
