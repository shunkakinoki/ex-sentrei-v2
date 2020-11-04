import ContainerRoot from "@/components/ContainerRoot";
import FooterRoot from "@/components/FooterRoot";
import HeaderRoot from "@/components/HeaderRoot";
import PaginationBase, {
  Props as PaginationBaseProps,
} from "@/components/PaginationBase";
import SpaceHero, {Props as SpaceHeroProps} from "@/components/SpaceHero";
import SpaceStoryGrid, {
  Props as SpaceStoryGridProps,
} from "@/components/SpaceStoryGrid";
import Profile from "@/types/Profile";

export interface Props
  extends SpaceStoryGridProps,
    Omit<PaginationBaseProps, "pathname"> {
  author: Profile.Get;
  space: Omit<SpaceHeroProps, "author" | "name" | "namespaceId">;
}

export default function SpaceScreen({
  author,
  articles,
  space,
  current,
  total,
  namespaceId,
}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <SpaceHero
        author={author}
        title={space.title}
        description={space.description}
        namespaceId={namespaceId}
      />
      <SpaceStoryGrid articles={articles} namespaceId={namespaceId} />
      {total > 1 && (
        <PaginationBase
          current={current}
          total={total}
          pathname={namespaceId === "" ? "" : `/${namespaceId}`}
        />
      )}
      <FooterRoot />
    </ContainerRoot>
  );
}
