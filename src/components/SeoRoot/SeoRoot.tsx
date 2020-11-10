import {DefaultSeo} from "next-seo";
import * as React from "react";

export default function SeoDefault(): JSX.Element {
  return (
    <DefaultSeo
      noindex={false}
      nofollow={false}
      title="The most delightful writing platform."
      titleTemplate="Sentrei | %s"
      description="The most delightful writing platform."
      openGraph={{
        images: [
          {
            alt: "Sentrei Logo Image",
            height: 500,
            url: "https://www.sentrei.com/logo.png",
            width: 500,
          },
        ],
        locale: "en_US",
        site_name: "sentrei.com",
        type: "website",
        url: "https://sentrei.com",
      }}
      twitter={{
        cardType: "summary_large_image",
        handle: "@sentrei_com",
        site: "@sentrei_com",
      }}
    />
  );
}
