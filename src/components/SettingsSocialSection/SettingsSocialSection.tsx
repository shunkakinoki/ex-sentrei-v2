/* eslint-disable jsx-a11y/label-has-associated-control */

export default function SettingsSocialSection(): JSX.Element {
  return (
    <div className="px-1 sm:px-2 md:px-3 md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Social
          </h3>
          <p className="mt-1 text-sm leading-5 text-gray-600">
            This information will be public so be careful what you share!
          </p>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div className="shadow-lg sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="profile_facebook"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Facebook
                  </label>
                  <div className="flex mt-1 rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                      https://facebook.com/
                    </span>
                    <input
                      id="profile_website"
                      className="flex-1 block w-full px-3 py-1 transition duration-150 ease-in-out border border-gray-300 rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                      placeholder="sentrei"
                    />
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="profile_github"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Github
                  </label>
                  <div className="flex mt-1 rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                      https://github.com/
                    </span>
                    <input
                      id="profile_website"
                      className="flex-1 block w-full px-3 py-1 transition duration-150 ease-in-out border border-gray-300 rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                      placeholder="sentrei"
                    />
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="profile_instagram"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Instagram
                  </label>
                  <div className="flex mt-1 rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                      https://instagram.com/
                    </span>
                    <input
                      id="profile_website"
                      className="flex-1 block w-full px-3 py-1 transition duration-150 ease-in-out border border-gray-300 rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                      placeholder="sentrei"
                    />
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="profile_twitter"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Twitter
                  </label>
                  <div className="flex mt-1 rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                      https://twitter.com/
                    </span>
                    <input
                      id="profile_website"
                      className="flex-1 block w-full px-3 py-1 transition duration-150 ease-in-out border border-gray-300 rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                      placeholder="SentreiHQ"
                    />
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="profile_website"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Website
                  </label>
                  <div className="flex mt-1 rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                      https://
                    </span>
                    <input
                      id="profile_website"
                      className="flex-1 block w-full px-3 py-1 transition duration-150 ease-in-out border border-gray-300 rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                      placeholder="www.example.com"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <span className="inline-flex rounded-md shadow-sm">
                <button
                  type="submit"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium leading-5 text-white transition duration-150 ease-in-out bg-pink-600 border border-transparent rounded-md hover:bg-pink-500 focus:outline-none focus:border-pink-700 focus:shadow-outline-pink active:bg-pink-700"
                >
                  Save
                </button>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
