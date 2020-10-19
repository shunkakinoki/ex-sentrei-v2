export default function LandingBanner(): JSX.Element {
  return (
    <section className="flex flex-col items-center max-w-screen-xl md:flex-row">
      <h1 className="flex-grow-0 max-w-2xl text-6xl font-bold leading-none tracking-tighter md:text-9xl md:leading-tight md:pr-3">
        The most{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-pink-600">
          delightful
        </span>{" "}
        way to start your own newsletter.
      </h1>
      <div className="flex justify-center max-w-4xl rounded-md shadow">
        {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a
          href="#"
          className="justify-center flex-grow px-6 py-3 font-medium text-white transition duration-100 ease-in-out bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-600"
        >
          Start Now
        </a>
      </div>
    </section>
  );
}
