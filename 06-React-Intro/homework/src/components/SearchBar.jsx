import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return <div>
    <input type="text" palceholder="...city" />
    <button onClick={() => props.onSearch("Searching...")}>Agregar</button>


  </div>
};