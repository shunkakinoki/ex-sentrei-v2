export default function LandingCta(): JSX.Element {
  return (
    <div className="max-w-screen-xl px-4 py-12 mx-auto sm:px-6 lg:pt-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        Ready to dive in?
        <br />
        <span className="text-pink-600">Start for completely free now.</span>
      </h2>
      <div className="mt-10 sm:mt-15 sm:flex sm:justify-center lg:flex-shrink-0 lg:mt-0">
        <div className="rounded-md shadow">
          {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="#"
            className="flex items-center justify-center w-full px-8 py-3 font-medium text-white rounded-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 md:py-4 md:text-lg md:px-20"
          >
            Get started.
          </a>
        </div>
      </div>
    </div>
  );
}
