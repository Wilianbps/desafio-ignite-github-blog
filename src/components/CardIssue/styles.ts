import styled from "styled-components";

export const ContainerCard = styled.div`
  max-width: 26rem;
  height: 260px;
  padding: 32px;
  background-color: ${(props) => props.theme["base-post"]};
  border-radius: 10px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    h3 {
      max-width: 283px;
      color: ${(props) => props.theme["base-title"]};
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 1.6;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }
    span {
      margin-top: 6px;
      align-self: flex-start;
      line-height: 1.6;
      color: ${(props) => props.theme["base-span"]};
      font-size: 0.875rem;
    }
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    line-height: 1.6;
    font-size: 1rem;
    overflow: hidden;
    color: var(--base-text, #afc2d4);
    display: -webkit-box;
    -webkit-line-clamp: 4;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }

  cursor: pointer;

  :hover {
    padding: 30px;
    border: 2px solid ${(props) => props.theme["base-label"]};
  }
`;
