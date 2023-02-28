import React from 'react'
import { useState } from 'react'
import Articulo from './Articulo'
const FuncArticulo = () => {
    const [count, setCount] = useState(1)
    const [lista, setLista] = useState([]);
    const adicionarArticulo = () => {
        setCount(count + 1)
        setLista([...lista,count])
    } 
  return (
    <>        
        <ul>
            {lista.map((valor,index) => <Articulo key={index} valor={valor} />)}            
        </ul>        
        <button onClick={adicionarArticulo }>Adicionar Artículo</button>
     </>
  )
}

export default FuncArticulo