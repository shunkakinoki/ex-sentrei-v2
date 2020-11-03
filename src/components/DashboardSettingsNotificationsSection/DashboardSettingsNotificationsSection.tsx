/* eslint-disable jsx-a11y/label-has-associated-control */

import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {mutate} from "swr";

import {timestamp} from "@/firebase/db";
import useAuth from "@/hooks/useAuth";
import useProfile from "@/hooks/useProfile";
import useSpace from "@/hooks/useSpace";
import {updateSpace} from "@/services/Space";
import {NotificationSettings} from "@/types/Space";

export interface Props {
  namespaceId: string;
}

export default function DashboardSettingsNotificationsSection({
  namespaceId,
}: Props): JSX.Element {
  const {authState} = useAuth();
  const {profile} = useProfile();
  const {space} = useSpace(namespaceId);

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const {register, handleSubmit, reset, formState} = useForm<
    NotificationSettings
  >({
    defaultValues: {
      analytics: space?.settings?.analytics,
      app: space?.settings?.app,
      customer: space?.settings?.customer,
      sales: space?.settings?.sales,
    },
  });

  const onSubmit = async (data: NotificationSettings) => {
    if (!authState?.uid || !profile) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    await mutate(`spaces/${authState.uid}`, data, false);
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    await updateSpace(authState?.uid, {
      settings: data,
      updatedAt: timestamp,
      updatedBy: profile,
      updatedByUid: authState?.uid,
    })
      .then(() =>
        toast.success("Success", {
          autoClose: 1500,
          draggable: false,
          hideProgressBar: true,
        }),
      )
      .catch((err: Error) => {
        toast.error(err.message);
      });
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    await mutate(`spaces/${authState.uid}`);
    return reset({
      analytics: space?.settings?.analytics,
      customer: space?.settings?.customer,
      sales: space?.settings?.sales,
    });
  };

  useEffect(() => {
    if (space && !formState.isDirty) {
      reset({
        analytics: space?.settings?.analytics,
        customer: space?.settings?.customer,
        sales: space?.settings?.sales,
      });
    }
  }, [reset, space, formState.isDirty]);

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
        <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
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
                        ref={register}
                        name="analytics"
                        id="notifications_analytics"
                        type="checkbox"
                        className="w-4 h-4 text-pink-600 transition duration-150 ease-in-out form-checkbox"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-5">
                      <label
                        htmlFor="notifications_analytics"
                        className="font-medium text-gray-700"
                      >
                        Analytics
                      </label>
                      <p className="text-gray-500">
                        Recieve periodic digests for dedicated analytics.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          ref={register}
                          name="customer"
                          id="notifications_customer"
                          type="checkbox"
                          className="w-4 h-4 text-pink-600 transition duration-150 ease-in-out form-checkbox"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-5">
                        <label
                          htmlFor="notifications_customer"
                          className="font-medium text-gray-700"
                        >
                          Customer
                        </label>
                        <p className="text-gray-500">
                          Get notified when you a customer subscribes to your
                          publication.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          ref={register}
                          name="sales"
                          id="notifications_sales"
                          type="checkbox"
                          className="w-4 h-4 text-pink-600 transition duration-150 ease-in-out form-checkbox"
                        />
                      </div>
                      <div className="ml-3 text-sm leading-5">
                        <label
                          htmlFor="notifications_sales"
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
                      ref={register}
                      id="app_everything"
                      name="app"
                      value="everything"
                      type="radio"
                      defaultChecked={space?.settings?.app === "everything"}
                      className="w-4 h-4 text-pink-600 transition duration-150 ease-in-out form-radio"
                    />
                    <label htmlFor="app_everything" className="ml-3">
                      <span className="block text-sm font-medium leading-5 text-gray-700">
                        Everything
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      ref={register}
                      id="app_email"
                      name="app"
                      value="email"
                      type="radio"
                      defaultChecked={space?.settings?.app === "email"}
                      className="w-4 h-4 text-pink-600 transition duration-150 ease-in-out form-radio"
                    />
                    <label htmlFor="app_email" className="ml-3">
                      <span className="block text-sm font-medium leading-5 text-gray-700">
                        Same as email
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      ref={register}
                      id="app_nothing"
                      name="app"
                      value="nothing"
                      type="radio"
                      defaultChecked={space?.settings?.app === "nothing"}
                      className="w-4 h-4 text-pink-600 transition duration-150 ease-in-out form-radio"
                    />
                    <label htmlFor="app_nothing" className="ml-3">
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
