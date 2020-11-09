import Link from "next/link";

export default function LandingCta(): JSX.Element {
  return (
    <section className="w-full py-16 bg-gray-50 ">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Ready to dive in?
          <br />
          <span className="text-pink-600">Start for completely free now.</span>
        </h2>
        <div className="mt-10 sm:mt-15 sm:flex sm:justify-center lg:flex-shrink-0 lg:mt-0">
          <div className="rounded-md shadow">
            <Link href="/signup">
              <a className="flex items-center justify-center w-full px-8 py-3 font-medium text-white rounded-md hover:from-purple-300 hover:via-pink-400 hover:to-red-400 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 md:py-4 md:text-lg md:px-20">
                Get started.
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
