export default function LandingStats(): JSX.Element {
  return (
    <section className="pt-12 bg-gray-50 sm:pt-16">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-9 text-gray-900 sm:text-4xl sm:leading-10">
            Empowering writers all over the world
          </h2>
          <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            We are here to accelerate the internet to be more fair to the
            individual.
          </p>
        </div>
      </div>
      <div className="pb-12 mt-10 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="bg-white rounded-lg shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col p-6 text-center border-b border-gray-100 sm:border-0 sm:border-r">
                  <dt
                    className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500"
                    id="item-1"
                  >
                    Organic
                  </dt>
                  <dd
                    className="order-1 text-5xl font-extrabold leading-none text-pink-600"
                    aria-describedby="item-1"
                  >
                    100%
                  </dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Delivery
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold leading-none text-pink-600">
                    24/7
                  </dd>
                </div>
                <div className="flex flex-col p-6 text-center border-t border-gray-100 sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                    Made by
                  </dt>
                  <dd className="order-1 text-5xl font-extrabold leading-none text-pink-600">
                    1
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
