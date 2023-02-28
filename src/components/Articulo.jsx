import React from 'react'
const Articulo = ({index, valor}) => {           
  return (
    <li key={index}>El punto {valor} ha sido añadido a la lista</li>
  )
}

export default Articulo