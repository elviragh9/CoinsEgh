import React from 'react'
import useContext from 'react';
import { ContextAutor } from '../context/ContextAutor.jsx';

export const About = () => {
  const {autor} = React.useContext(ContextAutor);

  return (
    <div>Esta página web sirve para mostrar información sobre las criptomonedas.</div>
  )
}

