import { useParams } from "react-router-dom";
import { CardHeaderPost } from "../../components/CardHeaderPost";
import { ContentPost, PostContainer, PostContent } from "./styles";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import ReactMarkdown from "react-markdown";

interface IPost {
  number: number;
  title: string;
  body: string;
  created_at: string;
}

export function Post() {
  const { numberIssue } = useParams();

  const [post, setPost] = useState<IPost>();

  const fetchPostByNumberIssue = useCallback(async () => {
    await api
      .get(`repos/wilianbps/desafio-ignite-github-blog/issues/${numberIssue}`)
      .then((response) => setPost(response.data));
  }, [numberIssue]);

  useEffect(() => {
    fetchPostByNumberIssue();
  }, [fetchPostByNumberIssue]);

  return (
    <PostContainer>
      <PostContent>
        <CardHeaderPost />
        <ContentPost>
          {/*           <SyntaxHighlighter language="javascript" style={dracula} children={post?.body}> */}
          <ReactMarkdown children={post?.body} />
          {/*         </SyntaxHighlighter> */}
        </ContentPost>
      </PostContent>
    </PostContainer>
  );
}
