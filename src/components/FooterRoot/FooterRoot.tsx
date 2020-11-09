import LogoFacebook from "@/components/LogoFacebook";
import LogoGithub from "@/components/LogoGithub";
import LogoInstagram from "@/components/LogoInstagram";
import LogoLinkedin from "@/components/LogoLinkedin";
import LogoTwitter from "@/components/LogoTwitter";
import LogoWebsite from "@/components/LogoWebsite";
import Space from "@/types/Space";

export interface Props {
  space?: Space.Get;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function FooterRoot({space}: Props): JSX.Element {
  return (
    <footer className="container flex flex-col items-center justify-between pt-3 mx-auto border-t-2 md:flex-row">
      <div className="flex px-3 pt-5 pb-5 text-sm font-normal text-gray-600">
        <div className="mt-2">
          &copy; Sentrei Inc. Copyright 2020. All Rights Reserved. &nbsp;v
          {process.env.SENTREI_VERSION}
          &nbsp;{process.env.VERCEL_GITHUB_COMMIT_REF}
        </div>
      </div>
      <div className="flex items-center space-x-6">
        {space?.social?.facebook && (
          <LogoFacebook href={space?.social?.facebook} />
        )}
        {space?.social?.github && <LogoGithub href={space?.social?.github} />}
        {space?.social?.instagram && (
          <LogoInstagram href={space?.social?.instagram} />
        )}
        {space?.social?.linkedin && (
          <LogoLinkedin href={space?.social?.linkedin} />
        )}
        {space?.social?.twitter && (
          <LogoTwitter href={space?.social?.twitter} />
        )}
        {space?.social?.website && (
          <LogoWebsite href={space?.social?.website} />
        )}
      </div>
    </footer>
  );
}
