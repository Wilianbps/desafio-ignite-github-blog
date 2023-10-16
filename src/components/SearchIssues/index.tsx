import { ContainerSearch } from "./styles";

interface SearchIssuesProps {
  searchIssues: string;
  postsCounter: number;
  setSearchIssues: (e: string) => void;
}

export function SearchIssues({
  searchIssues,
  postsCounter,
  setSearchIssues,
}: SearchIssuesProps) {
  return (
    <ContainerSearch>
      <header>
        <p>Publicações</p> <span>{postsCounter} publicações</span>
      </header>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        value={searchIssues}
        onChange={(e) => setSearchIssues(e.target.value)}
      />
    </ContainerSearch>
  );
}
