/* eslint-disable jsx-a11y/label-has-associated-control */

import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";
import {mutate} from "swr";

import useAuth from "@/hooks/useAuth";
import useProfile from "@/hooks/useProfile";
import useSpace from "@/hooks/useSpace";
import {
  createNamespace,
  validateNamespace,
  isReservedNamespace,
} from "@/services/Namespace";

export interface Props {
  namespaceId: string;
}

export default function DashboardBrandingDomainSection({
  namespaceId,
}: Props): JSX.Element {
  const {authState} = useAuth();
  const {profile} = useProfile();
  const {space} = useSpace(namespaceId);

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const {register, handleSubmit, reset, formState} = useForm<{
    namespaceId: string;
  }>({
    defaultValues: {
      namespaceId: space?.namespaceId,
    },
  });

  const onSubmit = async (data: {namespaceId: string}) => {
    if (!authState?.uid || !profile) {
      return null;
    }

    if (isReservedNamespace(data.namespaceId)) {
      toast.error("Is reserved namespace!");
      return null;
    }

    if (!(await validateNamespace(data.namespaceId))) {
      toast.error("Namespace is already used!");
      return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    await mutate(
      `spaces/${authState.uid}`,
      {...space, namespaceId: data.namespaceId},
      false,
    );

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    await createNamespace(data.namespaceId, {
      model: "spaces",
      id: authState?.uid,
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

    return null;
  };

  useEffect(() => {
    if (space && !formState.isDirty) {
      reset({
        namespaceId: space?.namespaceId,
      });
    }
  }, [reset, space, formState.isDirty]);

  return (
    <div className="px-1 sm:px-2 md:px-3 md:grid md:grid-cols-3 md:gap-6">
      <div className="md:col-span-1">
        <div className="px-4 sm:px-0">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Domains
          </h3>
          <p className="mt-1 text-sm leading-5 text-gray-600">
            Setup a custom domain
          </p>
        </div>
      </div>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <form action="#" method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className="shadow-lg sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-3 sm:col-span-2">
                  <label
                    htmlFor="basic_namespace"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Subdomain
                  </label>
                  <div className="flex mt-1 rounded-md shadow-sm">
                    <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                      https://
                    </span>
                    <input
                      ref={register}
                      id="basic_namespace"
                      name="namespaceId"
                      className="flex-1 block w-full px-3 py-1 transition duration-150 ease-in-out border border-gray-300 rounded-none form-input sm:text-sm sm:leading-5"
                      placeholder="shunkakinoki"
                    />
                    <span className="inline-flex items-center px-3 text-sm text-gray-500 border border-l-0 border-gray-300 rounded-r-md bg-gray-50">
                      .sentrei.com
                    </span>
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
