import PropTypes from "prop-types";
import { createContext, useState, useContext } from "react";
import { perfisJSON } from "../../services";

export const PerfilContext = createContext();

export const PerfilProvider = ({ children }) => {
  const [profiles, setProfiles] = useState(perfisJSON);

  const handleFollow = (id) => {
    const profilesUpdated = profiles.map((p) =>
      p.id === id ? { ...p, seguindo: !p.seguindo } : p
    );
    setProfiles(profilesUpdated);
  };

  return (
    <PerfilContext.Provider value={{ profiles, handleFollow }}>
      {children}
    </PerfilContext.Provider>
  );
};

PerfilProvider.propTypes = {
  children: PropTypes.node,
};

export const usePerfil = () => {
  const context = useContext(PerfilContext);
  return context;
};
