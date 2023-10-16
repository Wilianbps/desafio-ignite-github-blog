import styled from "styled-components";

export const PostContainer = styled.div`
  margin: 0 auto;
  max-width: 56rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const PostContent = styled.div`
  max-width: 54rem;
`;

export const ContentPost = styled.main`
  margin-top: 2.5rem;

  h1,
  h2,
  h3 {
    margin-top: 15px;

    color: ${(props) => props.theme.blue};
  }
  p {
    text-align: justify;
    color: ${(props) => props.theme["base-text"]};
    line-height: 1.6;
    font-weight: 600;
  }

  li {
    margin-left: 20px;
    color: ${(props) => props.theme["base-text"]};
    line-height: 1.6;
    font-weight: 600;
  }

  a {
    color: ${(props) => props.theme["base-text"]};
    line-height: 1.6;
    font-weight: 600;
  }
`;
