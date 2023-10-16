import styled from "styled-components";

import backgroundHeader from "../../assets/background-header.png";

export const HeaderContainer = styled.header`
  height: 296px;
  background-color: ${(props) => props.theme["base-border"]};
`;

export const ContainerLogoAndImages = styled.div`
  height: 18.5rem;
  display: flex;
  justify-content: center;

  .logo {
    margin: 64px;
  }

  background: url(${backgroundHeader}) no-repeat center;
  background-size: cover;

 
`;
