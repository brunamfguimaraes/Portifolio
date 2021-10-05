import React,{ useState } from 'react';
import Context from '../context/context'

function Provider({children}) {

  const [name, setName] = useState('');

  const contextValue = {
    name,
    setName,
  };
  return (
    <Context.Provider value= { contextValue }>
      { children }
    </Context.Provider>
  );
}

export default Provider;
