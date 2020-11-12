import dynamic from "next/dynamic";

import useProfile from "@/hooks/useProfile";

const ImageProfile = dynamic(() => import("@/components/ImageProfile"), {
  ssr: false,
});

export default function HeaderImageProfile(): JSX.Element {
  const {profile} = useProfile();

  return (
    <>
      <ImageProfile name={profile?.name ?? ""} image={profile?.image || null} />
    </>
  );
}
