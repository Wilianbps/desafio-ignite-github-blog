import styled from "styled-components";

export const ContainerSearch = styled.div`
  margin-top: 72px;

  header {
    margin-bottom: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      color: ${(props) => props.theme["base-subtitle"]};
      font-family: "Nunito", sans-serif;
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 1.6;
    }

    span {
      color: ${(props) => props.theme["base-span"]};
      font-family: "Nunito", sans-serif;
      font-size: 0.875rem;
      line-height: 1.6;
    }
  }

  input[type="text"] {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid ${(props) => props.theme["base-border"]};
    background-color: ${(props) => props.theme["base-input"]};
    border-radius: 6px;

    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
    line-height: 1.6;
  }

  input[type="text"]::placeholder{
    color: ${(props) => props.theme["base-label"]};
  }
`;
