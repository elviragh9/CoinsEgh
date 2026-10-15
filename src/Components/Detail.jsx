import React from 'react'
import {useParams} from 'react-router'
import useContext from 'react';
import { ContextAutor } from '../context/ContextAutor.jsx';

export const Detail = () => {
  const { id } = useParams();
  const {autor} = React.useContext(ContextAutor);
  return (
    <div>Detail: {id}</div>
  )
}

