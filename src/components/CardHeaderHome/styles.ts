import styled from "styled-components";

export const ContainerCardHeader = styled.div`
  max-width: 864px;
  max-height: 212px;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  gap: 32px;
  background: ${(props) => props.theme["base-profile"]};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-top: -88px;
`;

export const Image = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  flex-shrink: 0;
`;

export const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 0;
`;

export const NameUserHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    color: ${(props) => props.theme["base-title"]};
    font-family: "Nunito", sans-serif;
    font-size: 1.5rem;
    font-weight: 700;
  }

  a {
    gap: 0.5rem;
    text-decoration: none;
    font-size: 12px;
    font-family: "Nunito", sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme.blue};
    line-height: 160%;
    text-transform: uppercase;
    line-height: 0;

    display: flex;
    align-items: center;

    svg {
      margin-bottom: 3.2px;
      font-size: 12px;
    }
  }
`;

export const Text = styled.p`
  color: ${(props) => props.theme["base-text"]};
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  line-height: 160%;
`;

export const ContainerInfoFotter = styled.footer`
  margin-top: 42px;
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
