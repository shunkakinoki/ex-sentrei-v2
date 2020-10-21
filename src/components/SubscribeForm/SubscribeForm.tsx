/* eslint-disable jsx-a11y/label-has-associated-control */

export interface Props {
  namespace: string;
}

export default function SubscribeForm(): JSX.Element {
  return (
    <div className="w-full max-w-md">
      <div>
        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-center text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
          Subscribe to the newsletter
        </h2>
      </div>
      <div className="mt-6 rounded-md shadow-sm md:mt-8 lg:mt-10 xl:mt-12">
        <input
          aria-label="Email address"
          name="email"
          type="email"
          required
          className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none md:py-3 focus:outline-none focus:shadow-outline-blue focus:border-pink-300 focus:z-10 sm:text-sm sm:leading-5"
          placeholder="Email address"
        />
      </div>
      <div className="mt-3 rounded-md shadow md:mt-5 lg:mt-6 xl:mt-8">
        <div className="flex items-center justify-center w-full px-3 py-2 font-medium text-white rounded-md md:py-3 bg-gradient-to-r hover:from-purple-300 hover:via-pink-400 hover:to-red-400 from-purple-400 via-pink-500 to-red-500 md:text-lg md:px-20">
          Subscribe
        </div>
      </div>
    </div>
  );
}
