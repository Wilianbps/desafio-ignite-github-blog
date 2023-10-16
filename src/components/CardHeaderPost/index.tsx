import {
  ContainerCardHeader,
  ContainerInfoFotter,
  ContentCardHeader,
  ContentInfoFotter,
  TitlePost,
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { Link, useNavigate, useParams } from "react-router-dom";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useContextSelector } from "use-context-selector";
import { GitContext } from "../../contexts/GitContext";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons/faCalendarDays";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";

export function CardHeaderPost() {
  const user = useContextSelector(GitContext, (context) => {
    return context.user;
  });

  const { numberIssue } = useParams();

  const linkToIssue = `https://github.com/wilianbps/desafio-ignite-github-blog/issues/${numberIssue}`;

  const navigate = useNavigate();

  function backToHomePage() {
    navigate(-1);
  }

  return (
    <ContainerCardHeader>
      <ContentCardHeader>
        <header>
          <button className="buttonToBackHome" onClick={() => backToHomePage()}>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>voltar</span>
          </button>

          <Link className="linkGitHub" target="_blank" to={linkToIssue}>
            <span>ver no github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Link>
        </header>

        <TitlePost>JavaScript data types and data structures</TitlePost>

        <ContainerInfoFotter>
          <ContentInfoFotter>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </ContentInfoFotter>
          <ContentInfoFotter>
            <FontAwesomeIcon icon={faCalendarDays} />
            <span>Há 1 dia</span>
          </ContentInfoFotter>
          <ContentInfoFotter>
            <FontAwesomeIcon icon={faComment} />
            <span>5 comentários</span>
          </ContentInfoFotter>
        </ContainerInfoFotter>
      </ContentCardHeader>
    </ContainerCardHeader>
  );
}
