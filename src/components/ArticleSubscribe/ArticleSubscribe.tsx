import Link from "next/link";

export interface Props {
  namespaceId: string;
}

export default function ArticleSubscribe({namespaceId}: Props): JSX.Element {
  return (
    <div className="max-w-md py-4 mx-auto text-center rounded-lg shadow-2xl mt-9 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl bg-gradient-to-br from-pink-300 to-pink-600 md:py-6 lg:py-8">
      <h2 className="mx-4 text-3xl font-bold leading-9 tracking-tight text-center text-white md:mx-16 lg:mx-32 sm:text-4xl sm:leading-10">
        This is a paid subscription article.
      </h2>
      <p className="mt-1 text-center text-white sm:mt-2 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-3 md:text-xl ">
        Subscribe now to unlock all content
      </p>
      <div className="flex justify-center mt-8">
        <div className="inline-flex ">
          <Link href={`/${namespaceId}/subscribe`}>
            <a className="px-6 py-2 font-bold text-pink-600 transition duration-500 ease-in-out transform bg-white border rounded hover:-translate-y-1 md:px-8 lg:px-12 md:py-3">
              Subscribe
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
