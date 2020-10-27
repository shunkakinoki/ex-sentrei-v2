/* eslint-disable jsx-a11y/label-has-associated-control */

export default function DashboardSettingsNotificationsSection(): JSX.Element {
  return (
    <div className="px-1 sm:px-2 md:px-3 md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Notifications
          </h3>
          <p className="mt-1 text-sm leading-5 text-gray-600">
            Decide which communications you would like to receive and how.
          </p>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST">
          <div className="overflow-hidden shadow-lg sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <fieldset>
                <legend className="text-base font-medium leading-6 text-gray-900">
                  By Email
                </legend>
                <div className="mt-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="comments"
                        type="checkbox"
                        className="w-4 h-4 text-pink-600 transition duration-150 ease-in-out form-checkbox"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-5">
                      <label
                        htmlFor="comments"
                        className="font-medium text-gray-700"
                      >
                        Analytics
                      </label>
                      <p className="text-gray-500">
                        Recieve periodic digests for your analytics of your
                        medium.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="candidates"
                          type="checkbox"
                          className="w-4 h-4 text-pink-600 transition duration-150 ease-in-out form-checkbox"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-5">
                        <label
                          htmlFor="candidates"
                          className="font-medium text-gray-700"
                        >
                          Comments
                        </label>
                        <p className="text-gray-500">
                          Get notified when a customer posts a comment.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="offers"
                          type="checkbox"
                          className="w-4 h-4 text-pink-600 transition duration-150 ease-in-out form-checkbox"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-5">
                        <label
                          htmlFor="offers"
                          className="font-medium text-gray-700"
                        >
                          Sales
                        </label>
                        <p className="text-gray-500">
                          Get notified when you get a paid subscriber.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <fieldset className="mt-6">
                <legend className="text-base font-medium leading-6 text-gray-900">
                  App Notifications
                </legend>
                <p className="text-sm leading-5 text-gray-500">
                  These are shown on the app bar.
                </p>
                <div className="mt-4">
                  <div className="flex items-center">
                    <input
                      id="push_everything"
                      name="push_notifications"
                      type="radio"
                      className="w-4 h-4 text-pink-600 transition duration-150 ease-in-out form-radio"
                    />
                    <label htmlFor="push_everything" className="ml-3">
                      <span className="block text-sm font-medium leading-5 text-gray-700">
                        Everything
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      id="push_email"
                      name="push_notifications"
                      type="radio"
                      className="w-4 h-4 text-pink-600 transition duration-150 ease-in-out form-radio"
                    />
                    <label htmlFor="push_email" className="ml-3">
                      <span className="block text-sm font-medium leading-5 text-gray-700">
                        Same as email
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      id="push_nothing"
                      name="push_notifications"
                      type="radio"
                      className="w-4 h-4 text-pink-600 transition duration-150 ease-in-out form-radio"
                    />
                    <label htmlFor="push_nothing" className="ml-3">
                      <span className="block text-sm font-medium leading-5 text-gray-700">
                        No app notifications
                      </span>
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>
            <div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white transition duration-150 ease-in-out bg-pink-600 border border-transparent rounded-md shadow-sm hover:bg-pink-500 focus:outline-none focus:shadow-outline-blue focus:bg-pink-500 active:bg-pink-600"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
