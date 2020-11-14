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
import Social from "@/types/Social";

export interface Props {
  namespaceId: string;
}

export default function DashboardSettingsSocialSection({
  namespaceId,
}: Props): JSX.Element {
  const {authState} = useAuth();
  const {profile} = useProfile();
  const {space} = useSpace(namespaceId);

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const {register, handleSubmit, reset, formState} = useForm<Social>({
    defaultValues: {
      facebook: space?.social?.facebook,
      github: space?.social?.github,
      instagram: space?.social?.instagram,
      linkedin: space?.social?.linkedin,
      twitter: space?.social?.twitter,
      website: space?.social?.website,
    },
  });

  const onSubmit = async (data: Social) => {
    if (!authState?.uid || !profile || !space?.id) {
      return null;
    }

    await mutate(`profiles/${authState.uid}`, {social: data}, false);

    await updateSpace(space.id, {
      social: data,
      updatedAt: timestamp,
      updatedBy: profile,
      updatedByUid: authState.uid,
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

    await mutate(`profiles/${authState.uid}`);

    return null;
  };

  useEffect(() => {
    if (space && !formState.isDirty) {
      reset({
        facebook: space?.social?.facebook,
        github: space?.social?.github,
        instagram: space?.social?.instagram,
        twitter: space?.social?.twitter,
        website: space?.social?.website,
      });
    }
  }, [reset, space, formState.isDirty]);

  return (
    <div className="px-1 sm:px-2 md:px-3 md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Social
          </h3>
          <p className="mt-1 text-sm leading-5 text-gray-600">
            This will be displayed on the footer!
          </p>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="shadow-lg sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="social_facebook"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Facebook
                  </label>
                  <div className="flex mt-1 rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                      https://facebook.com/
                    </span>
                    <input
                      ref={register}
                      id="social_facebook"
                      name="facebook"
                      className="flex-1 block w-full px-3 py-1 transition duration-150 ease-in-out border border-gray-300 rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                      placeholder="sentrei"
                    />
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="social_github"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Github
                  </label>
                  <div className="flex mt-1 rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                      https://github.com/
                    </span>
                    <input
                      ref={register}
                      id="social_github"
                      name="github"
                      className="flex-1 block w-full px-3 py-1 transition duration-150 ease-in-out border border-gray-300 rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                      placeholder="sentrei"
                    />
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="social_instagram"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Instagram
                  </label>
                  <div className="flex mt-1 rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                      https://instagram.com/
                    </span>
                    <input
                      ref={register}
                      id="social_instagram"
                      name="instagram"
                      className="flex-1 block w-full px-3 py-1 transition duration-150 ease-in-out border border-gray-300 rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                      placeholder="sentrei"
                    />
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="social_linkedin"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Linkedin
                  </label>
                  <div className="flex mt-1 rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                      https://linkedin.com/
                    </span>
                    <input
                      ref={register}
                      id="social_linkedin"
                      name="instagram"
                      className="flex-1 block w-full px-3 py-1 transition duration-150 ease-in-out border border-gray-300 rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                      placeholder="sentrei"
                    />
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="social_twitter"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Twitter
                  </label>
                  <div className="flex mt-1 rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                      https://twitter.com/
                    </span>
                    <input
                      ref={register}
                      id="social_twitter"
                      name="twitter"
                      className="flex-1 block w-full px-3 py-1 transition duration-150 ease-in-out border border-gray-300 rounded-none form-input rounded-r-md sm:text-sm sm:leading-5"
                      placeholder="SentreiHQ"
                    />
                  </div>
                </div>
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="social_website"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Website
                  </label>
                  <div className="flex mt-1 rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                      https://
                    </span>
                    <input
                      ref={register}
                      id="social_website"
                      name="website"
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
