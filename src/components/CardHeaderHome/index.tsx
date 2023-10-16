import {
  ContainerCardHeader,
  Image,
  ContainerInfo,
  NameUserHeader,
  Text,
  ContainerInfoFotter,
  ContentInfoFotter,
} from "./styles";
import { GitContext } from "../../contexts/GitContext";
import { useContextSelector } from "use-context-selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowUpRightFromSquare,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";

export function CardHeaderHome() {
  const user = useContextSelector(GitContext, (context) => {
    return context.user;
  });

  return (
    <ContainerCardHeader>
      <Image src={user.avatar_url} />
      <ContainerInfo>
        <NameUserHeader>
          <p>{user.name}</p>
          <a target="_blank" href="https://github.com/Wilianbps">
            <span>github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </NameUserHeader>
        <Text>{user.bio}</Text>
        <ContainerInfoFotter>
          <ContentInfoFotter>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </ContentInfoFotter>
          <ContentInfoFotter>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{user.company}</span>
          </ContentInfoFotter>
          <ContentInfoFotter>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>
              {user.followers <= "1"
                ? `${user.followers} seguidor`
                : `${user.followers} seguidores`}
            </span>
          </ContentInfoFotter>
        </ContainerInfoFotter>
      </ContainerInfo>
    </ContainerCardHeader>
  );
}
