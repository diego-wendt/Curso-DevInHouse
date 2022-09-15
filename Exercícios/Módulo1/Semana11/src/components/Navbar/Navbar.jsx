import { useCustomTheme } from "../../contexts";
import { Button, Container, ContentTitle, Title } from "./Navbar.styled";
import logo from "../../assets/img/vite.svg";

export const Navbar = () => {
  const { handleTheme } = useCustomTheme();

  return (
    <Container>
      <ContentTitle>
        <img src={logo} alt="Logo" />
        <Title>Perfis</Title>
      </ContentTitle>

      <Button>Alterar tema</Button>
    </Container>
  );
};
