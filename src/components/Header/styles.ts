import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 296px;
  background-color: ${(props) => props.theme["base-profile"]};
`;

export const ContainerLogoAndImages = styled.div`
  display: flex;
  justify-content: space-between;

  .logo {
    margin: 64px;
  }

  .ImageEffectLeft {
    margin-top: 70px;
  }

  .ImageEffectRight {
    margin-top: 30px;
  }
`;
