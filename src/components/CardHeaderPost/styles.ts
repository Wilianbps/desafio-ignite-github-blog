import styled from "styled-components";

export const ContainerCardHeader = styled.div`
  max-width: 864px;
  height: 168px;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  gap: 32px;
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -88px;
`;

export const ContentCardHeader = styled.div`
  width: 100%;
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .buttonToBackHome {
      display: flex;
      align-items: center;
      gap: 0.625rem;
      background-color: transparent;
      border: 0;
      cursor: pointer;

      > svg,
      span {
        color: ${(props) => props.theme.blue};
      }
    }

    .linkGitHub {
      display: flex;
      align-items: center;
      gap: 5px;
      text-decoration: none;

      svg {
        color: ${(props) => props.theme.blue};
        margin-bottom: 3.2px;
        font-size: 12px;
      }

      span {
        font-family: "Nunito", sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 160%;
        text-transform: uppercase;
        color: ${(props) => props.theme.blue};
      }
    }
  }
`;

export const TitlePost = styled.h2`
  margin-top: 20px;
  color: ${(props) => props.theme.white};
  font-family: "Nunito", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
`;

export const ContainerInfoFotter = styled.footer`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const ContentInfoFotter = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  span {
    color: ${(props) => props.theme["base-subtitle"]};
  }

  svg {
    color: ${(props) => props.theme["base-label"]};
    font-size: 18px;
  }
`;
