import dynamic from "next/dynamic";

import ContainerRoot from "@/components/ContainerRoot";
import FooterRoot from "@/components/FooterRoot";
import HeaderRoot from "@/components/HeaderRoot";
import SpaceHero from "@/components/SpaceHero";
import {Props as SpaceStoryGridProps} from "@/components/SpaceStoryGrid";
import Space from "@/types/Space";

const SpaceStoryGrid = dynamic(() => import("@/components/SpaceStoryGrid"), {
  ssr: false,
});

export interface Props
  extends Omit<SpaceStoryGridProps, "articleCount" | "spaceId"> {
  space: Space.Get;
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
      <SpaceStoryGrid
        articles={articles}
        namespaceId={namespaceId}
        articleCount={space.articleCount}
        spaceId={space.id}
      />
      <FooterRoot />
    </ContainerRoot>
  );
}
