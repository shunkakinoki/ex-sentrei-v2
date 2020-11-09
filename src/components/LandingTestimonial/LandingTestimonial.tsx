export default function LandingTestimonial(): JSX.Element {
  return (
    <section className="bg-gray-600">
      <div className="container w-full px-4 py-20 mx-auto text-center md:w-4/5 lg:w-4/6">
        <h1 className="mt-3 mb-10 text-xl font-extrabold leading-tight text-white md:text-3xl">
          “Sentrei is definitely{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            a go to solution for
          </span>{" "}
          deploying publications. It is super seamless and easy to use. And best
          of all, they charge entirely{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            zero commissions
          </span>{" "}
          on paywalls. Truly a{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-pink-400">
            game-changer
          </span>
          .“
        </h1>
        <div className="mx-auto mb-3 shadow-lg avatar" />
        <p className="text-base font-medium text-gray-200">Kohei Nagata</p>
        <p className="text-xs font-medium text-gray-400">CEO, Here</p>
      </div>
    </section>
  );
}
