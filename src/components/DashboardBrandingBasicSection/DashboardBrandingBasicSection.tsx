/* eslint-disable jsx-a11y/label-has-associated-control */

import {useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {mutate} from "swr";

import ImageProfile from "@/components/ImageProfile";
import {timestamp} from "@/firebase/db";
import useAuth from "@/hooks/useAuth";
import useProfile from "@/hooks/useProfile";
import useSpace from "@/hooks/useSpace";
import {updateSpace} from "@/services/Space";
import Space from "@/types/Space";
import {getImageUrl} from "@/utils/image";

export interface Props {
  namespaceId: string;
}

export default function DashboardBrandingBasicSection({
  namespaceId,
}: Props): JSX.Element {
  const {authState} = useAuth();
  const {profile} = useProfile();
  const {space} = useSpace(namespaceId);

  const hiddenFileInput = useRef(null);

  const handleClick = (): void => {
    if (!hiddenFileInput.current) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    hiddenFileInput.current.click();
  };

  const handleFile = async (file: File) => {
    if (!authState?.uid || !profile) {
      return null;
    }

    const imageUrl = await getImageUrl(file);

    await mutate(`spaces/${authState.uid}`, {...space, image: imageUrl}, false);

    await updateSpace(authState?.uid, {
      image: imageUrl,
      updatedAt: timestamp,
      updatedBy: profile,
      updatedById: authState?.uid,
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

    await mutate(`spaces/${authState.uid}`);

    return null;
  };

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const {register, handleSubmit, reset, formState} = useForm<
    Partial<Pick<Space.Fields, "description" | "title">>
  >({
    defaultValues: {
      description: space?.description,
      title: space?.title,
    },
  });

  const onSubmit = async (data: Space.Update) => {
    if (!authState?.uid || !profile) {
      return null;
    }

    await mutate(`spaces/${authState.uid}`, {...space, data}, false);

    await updateSpace(authState?.uid, {
      ...data,
      updatedAt: timestamp,
      updatedBy: profile,
      updatedById: authState?.uid,
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

    await mutate(`spaces/${authState.uid}`);

    return null;
  };

  useEffect(() => {
    if (space && !formState.isDirty) {
      reset({
        description: space?.description,
        title: space?.title,
      });
    }
  }, [reset, space, formState.isDirty]);

  return (
    <div className="px-1 sm:px-2 md:px-3 md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Basic</h3>
          <p className="mt-1 text-sm leading-5 text-gray-600">
            Information about the publication
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
                    htmlFor="basic_title"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Title
                  </label>
                  <div className="flex mt-1 rounded-md shadow-sm">
                    <input
                      ref={register}
                      id="basic_title"
                      name="title"
                      className="flex-1 block w-full px-3 py-1 transition duration-150 ease-in-out border border-gray-300 rounded-md form-input sm:text-sm sm:leading-5"
                      placeholder="My awesome title"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="basic_description"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Description
                </label>
                <div className="rounded-md shadow-sm">
                  <textarea
                    ref={register}
                    id="basic_description"
                    name="description"
                    rows={3}
                    className="block w-full p-2 mt-1 transition duration-150 ease-in-out border form-textarea sm:text-sm sm:leading-5"
                    placeholder="We share awesome stories that you enjoy every day."
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Brief description for your publication.
                </p>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                  Logo
                </label>
                <div className="flex items-center mt-2">
                  <ImageProfile
                    image={space?.image ?? null}
                    name={space?.title ?? ""}
                  />
                  <span className="ml-5 rounded-md shadow-sm">
                    <input
                      ref={hiddenFileInput}
                      type="file"
                      accept="image/*"
                      style={{display: "none"}}
                      onChange={e => {
                        if (!e.target.files) {
                          return;
                        }
                        // eslint-disable-next-line no-void
                        void handleFile(e.target.files[0]);
                      }}
                    />
                    <button
                      type="button"
                      className="px-3 py-2 text-sm font-medium leading-4 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-pink-300 focus:shadow-outline-pink active:bg-gray-50 active:text-gray-800"
                      onClick={handleClick}
                    >
                      Change
                    </button>
                  </span>
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
