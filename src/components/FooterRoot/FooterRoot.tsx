import Link from "next/link";

import LogoFacebook from "@/components/LogoFacebook";
import LogoGithub from "@/components/LogoGithub";
import LogoInstagram from "@/components/LogoInstagram";
import LogoLinkedin from "@/components/LogoLinkedin";
import LogoTwitter from "@/components/LogoTwitter";
import LogoWebsite from "@/components/LogoWebsite";
import Social from "@/types/Social";
import Space from "@/types/Space";

export interface Props {
  social?: Social;
  title?: Pick<Space.Get, "title">;
}

export default function FooterRoot({title, social}: Props): JSX.Element {
  return (
    <footer className="w-full border-t-2 bg-gray-50">
      <div className="container flex flex-col items-center justify-between pt-3 mx-auto md:flex-row ">
        <div className="flex items-center px-3 pt-5 pb-5 text-sm font-normal text-gray-600">
          <p>
            v{process.env.SENTREI_VERSION}
            &nbsp;{process.env.VERCEL_GITHUB_COMMIT_REF}
            &copy; {title || "Sentrei Inc."}&nbsp;
          </p>
          <p>
            See{" "}
            <Link href="/privacy">
              <a className="text-sm font-medium text-gray-700 transition-colors duration-100 ease-in hover:underline hover:text-primary">
                Privacy
              </a>
            </Link>{" "}
            &amp;{" "}
            <Link href="/terms">
              <a className="text-sm font-medium text-gray-700 transition-colors duration-100 ease-in hover:underline hover:text-primary">
                Terms
              </a>
            </Link>
          </p>
        </div>
        <div className="flex items-center space-x-6">
          {social?.facebook && <LogoFacebook href={social?.facebook} />}
          {social?.github && <LogoGithub href={social?.github} />}
          {social?.instagram && <LogoInstagram href={social?.instagram} />}
          {social?.linkedin && <LogoLinkedin href={social?.linkedin} />}
          {social?.twitter && <LogoTwitter href={social?.twitter} />}
          {social?.website && <LogoWebsite href={social?.website} />}
        </div>
      </div>
    </footer>
  );
}
