import Image from "next/image";
import Link from "next/link";

import Space from "@/types/Space";

export interface Props extends Pick<Space.Get, "image"> {
  size?: number;
}

export default function ImageLogo({image, size = 50}: Props): JSX.Element {
  return (
    <Link href="/">
      <a className="inline-block">
        {image ? (
          <Image
            priority
            src={image}
            height={size}
            width={size}
            layout="fixed"
            alt="Logo"
            className="w-auto h-12 rounded-full sm:h-10"
          />
        ) : (
          <Image
            priority
            src="/assets/logo.png"
            height={size}
            width={size}
            layout="fixed"
            alt="Logo"
            className="w-auto h-12 sm:h-10"
          />
        )}
      </a>
    </Link>
  );
}
