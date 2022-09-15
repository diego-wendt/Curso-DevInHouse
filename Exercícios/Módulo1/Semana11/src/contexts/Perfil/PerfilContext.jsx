import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";
import { perfisJSON } from "../../services/index";
import { getProfilesLocalStorage } from "../../utils";

export const PerfilContext = createContext();

export const PerfilProvider = ({ children }) => {
  // as funções do provider ficarão aqui

  const [profile, setProfile] = useState(perfisJSON);

  const handleFollow = (id) => {
    const profileUpdate = profile.map((p) =>
      p.id === id ? { ...p, seguindo: !p.seguindo } : p )
      setProfile(profileUpdate)
  };

  useEffect(() => {
    const profilesList = getProfilesLocalStorage();
    if (profilesList) {
      setProfile(profilesList);
    }
  }, []);

  return <PerfilProvider value={handleFollow}>{children}</PerfilProvider>;
};

export const usePerfil = () => {
  const context = useContext(PerfilContext);
  return context;
};

PerfilProvider.propTypes = {
  children: PropTypes.node,
};
