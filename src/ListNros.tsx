import { useEffect, useState } from "react"


interface Props {
    fnGetItems(inc:number): number[]
}


const ListNros = (fn: Props) => {
    const [items, setItems ] = useState<number[]>([])

    useEffect(() => {
        setItems(fn.fnGetItems(2))
        console.log('Updating items:')
    }, [fn.fnGetItems])

  return (
    <>
        <div>Items list</div>
        {items.map((item) =>  <div key={item}>{item}</div>
        )}
    </>
  )
}

export default ListNros