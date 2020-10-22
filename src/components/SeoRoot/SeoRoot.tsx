import {DefaultSeo} from "next-seo";
import * as React from "react";

export default function SeoDefault(): JSX.Element {
  return (
    <DefaultSeo
      noindex={false}
      nofollow={false}
      titleTemplate="Sentrei | %s"
      description="The most delightful way to start your own blog, media, or a newsletter."
      openGraph={{
        type: "website",
        locale: "en_US",
        url: "https://sentrei.com",
        site_name: "sentrei.com",
        images: [
          {
            url: "https://www.sentrei.com/logo.png",
            width: 500,
            height: 500,
            alt: "Sentrei Logo Image",
          },
        ],
      }}
      twitter={{
        handle: "@sentrei_com",
        site: "@sentrei_com",
        cardType: "summary_large_image",
      }}
    />
  );
}
