import PropTypes from "prop-types";
import { usePerfil } from "../../contexts/Perfil/PerfilContext";
import { ButtonStyled } from "../Button";
import { Container } from "./Profile.styled";

export const Profile = ({profile}) => {
  const { handleFollow } = usePerfil();

 
  return (
    <Container>
      <p>{profile.iniciaisNome}</p>
      <p>{profile.nome}</p>
      <p>{profile.descricao}</p>
      <ButtonStyled
        onClick={() => {
          handleFollow(profile.id);
        }}
      >
        {profile.seguindo ? "Deixar de seguir" : "Seguir"}
      </ButtonStyled>
    </Container>
  );
};

Profile.propTypes = {
  profile: PropTypes.object,
};
