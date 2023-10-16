import { ContainerCard } from "./styles";

interface CardIssueProps {
  issue: {
    number: number;
    title: string;
    body: string;
    created_at: string;
  };
  onClick: () => void;
}

export function CardIssue({ issue, onClick }: CardIssueProps) {
  return (
    <ContainerCard onClick={onClick}>
      <header>
        <h3>{issue.title}</h3>
        <span>Há 1 dia</span>
      </header>
      <p>{issue.body}</p>
    </ContainerCard>
  );
}
