import ContainerRoot from "@/components/ContainerRoot";
import FooterRoot from "@/components/FooterRoot";
import HeaderRoot from "@/components/HeaderRoot";
import SpaceHero, {Props as SpaceHeroProps} from "@/components/SpaceHero";
import SpaceStoryGrid, {
  Props as SpaceStoryGridProps,
} from "@/components/SpaceStoryGrid";

export interface Props extends SpaceStoryGridProps {
  space: Omit<SpaceHeroProps, "author" | "name" | "namespaceId">;
}

export default function SpaceScreen({
  articles,
  space,
  namespaceId,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <SpaceHero
        description={space.description}
        namespaceId={namespaceId}
        title={space.title}
        updatedBy={space.updatedBy}
      />
      <SpaceStoryGrid articles={articles} namespaceId={namespaceId} />
      <FooterRoot />
    </ContainerRoot>
  );
}
