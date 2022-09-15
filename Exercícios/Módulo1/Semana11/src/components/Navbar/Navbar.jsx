import { useCustomTheme } from "../../contexts";
import { Container, ContentTitle, Title } from "./Navbar.styled";
import logo from "../../assets/img/vite.svg";
import { ButtonStyled } from "../Button";

export const Navbar = () => {
  const { handleTheme } = useCustomTheme();

  return (
    <Container>
      <ContentTitle>
        <img src={logo} alt="Logo" />
        <Title>Perfis</Title>
      </ContentTitle>

      <ButtonStyled>Alterar tema</ButtonStyled>
    </Container>
  );
};
