import React from 'react'
import { useState } from 'react'
import Articulo from './Articulo'
const FuncArticulo = () => {    
    const [lista, setLista] = useState([]);
    const adicionarArticulo = () => {        
        setLista([...lista,lista.length+1])
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