import React, { useState } from "react";

export const appContext = React.createContext(null);

const ContextProvider = appContext.Provider;


// este componente é quem vai permitir que os elementos abraçados tenham acesso aos dados que estão dentro do value do ContextProvider
export const AppContextProvider = ({ children }) => {
 
  const [allTips, setAllTips ] = useState([
    {
      titulo: "aaaa",
      linguagem: "mais um teste",
      categoria: "devOps",
      descricao: "lorem10 lorem10 lorem10 lorem10lorem10 lorem10 lorem10 lorem10",
      video: "http://www.globo.com",
    },
  ])
  const [filter, setFilter] = useState(null)
 
  const createTip = (tip) => {
    setAllTips((previousTips) => [...previousTips, tip])
  }
  

  const filterTips = (query) => {
    if (query){
      setFilter(query)
    }else{
      setFilter(null)
    }

  }
  
  const tips = filter ? allTips.filter(tip=>tip.titulo.includes(filter)): allTips;
 
  return (
  <ContextProvider value={{createTip, filterTips, tips}}>
    {children}
    </ContextProvider>)
};

// esse o customHook é chamado em cada local que se deseja ter acesso á informação dentro do Context, e em vez de importar o React.useContext(appContext), importa-se apenas o useAppContext que é o customHook que ja traz todos esses imports embutidos
export const useAppContext = () => {
  const context = React.useContext(appContext);
  return context;
};
