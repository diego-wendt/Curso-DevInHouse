import React from "react";

export const appContext = React.createContext(null);

const ContextProvider = appContext.Provider;

// este componente é quem vai permitir que os elementos abraçados tenham acesso aos dados que estão dentro do value do ContextProvider
export const AppContextProvider = ({ children }) => {
  return (
  <ContextProvider value={"conectado"}>
    {children}
    </ContextProvider>)
};

// esse o customHook é chamado em cada local que se deseja ter acesso á informação dentro do Context, e em vez de importar o React.useContext(appContext), importa-se apenas o useAppContext que é o customHook que ja traz todos esses imports embutidos
export const useAppContext = () => {
  const context = React.useContext(appContext);
  return context;
};
