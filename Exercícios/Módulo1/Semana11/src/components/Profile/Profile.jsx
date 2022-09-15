import PropTypes from "prop-types";
import { usePerfil } from "../../contexts/Perfil/PerfilContext";
import { ProfileStyled as Container } from "./Profile.styled";

export const Profile = (profile) => {
  const { handleFollow } = usePerfil();

  return (
    <Container>
      <p>{profile.iniciaisNome}</p>
      <p>{profile.nome}</p>
      <p>{profile.descricao}</p>
      <button
        onClick={() => {
          handleFollow(profile.id);
        }}
      >
        {profile.seguindo ? "Deixar de seguir" : "Seguir"}
      </button>
    </Container>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
};
