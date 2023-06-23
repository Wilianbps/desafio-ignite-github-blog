import { ContainerLogoAndImages, HeaderContainer } from "./styles";
import Logo from "../../assets/logo.png";
import EffectLeft from "../../assets/effect-left.png";
import EffectRight from "../../assets/effect-right.png";

export function Header() {
  return (
    <HeaderContainer>
      <ContainerLogoAndImages>
        <img src={EffectLeft} alt="" width="409" height="188" className="ImageEffectLeft" />
        <img src={Logo} alt="Logo Github Blog" className="logo" width="148" height="98"/>
        <img src={EffectRight} alt="" width="409" height="236" className="ImageEffectRight" />
      </ContainerLogoAndImages>
    </HeaderContainer>
  );
}
