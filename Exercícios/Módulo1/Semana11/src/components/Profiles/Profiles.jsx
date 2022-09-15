import { usePerfil } from "../../contexts/Perfil/PerfilContext";
import { Profile } from "../Profile/Profile";
import { Container } from "./Profiles.styles";


export const Profiles = () => {
  const { handleFollow, profiles } = usePerfil();

  return (
    <Container>
      {profiles.map((p) => {
        return <Profile key={p.id} profile={p}></Profile>;
      })}
    </Container>
  );
};
