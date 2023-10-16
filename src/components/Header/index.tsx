import { ContainerLogoAndImages, HeaderContainer } from "./styles";
import Logo from "../../assets/logo.png";

export function Header() {
  return (
    <HeaderContainer>
      <ContainerLogoAndImages>
        <img
          src={Logo}
          alt="Logo Github Blog"
          className="logo"
          width="148"
          height="98"
        />
      </ContainerLogoAndImages>
    </HeaderContainer>
  );
}
