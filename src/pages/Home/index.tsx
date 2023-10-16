import { useContextSelector } from "use-context-selector";
import { CardHeaderHome } from "../../components/CardHeaderHome";
import { CardIssue } from "../../components/CardIssue";
import { SearchIssues } from "../../components/SearchIssues";
import { HomeContainer, HomeContext, ContainerCardsIssues } from "./styles";
import { GitContext } from "../../contexts/GitContext";
import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";

export function Home() {
  const [searchIssues, setSearchIssues] = useState("");
   const [postsCounter, setPostsCounter] = useState(0)

  const issues = useContextSelector(GitContext, (context) => {
    return context.issues;
  });

  const setIssues = useContextSelector(GitContext, (context) => {
    return context.setIssues;
  });

  const navigate = useNavigate();

  function goToPostPage(numberIssue: number) {
    navigate(`post/${numberIssue}`);
  }

  const fetchIssues = useCallback(async () => {
    
    const response = await api.get("search/issues", {
      params: {
        q: `repo:wilianbps/desafio-ignite-github-blog is:issue ${searchIssues}`,
      },
    });
    setPostsCounter(response.data.total_count)
    setIssues(response.data.items);
  }, [searchIssues, setIssues]);

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues, searchIssues]);

  return (
    <HomeContainer>
      <HomeContext>
        <CardHeaderHome />
        <SearchIssues
          searchIssues={searchIssues}
          setSearchIssues={setSearchIssues}
          postsCounter={postsCounter}
        />
        <ContainerCardsIssues>
          {issues?.map((issue) => (
            <CardIssue
              key={issue.number}
              issue={issue}
              onClick={() => goToPostPage(issue.number)}
            />
          ))}
        </ContainerCardsIssues>
      </HomeContext>
    </HomeContainer>
  );
}
