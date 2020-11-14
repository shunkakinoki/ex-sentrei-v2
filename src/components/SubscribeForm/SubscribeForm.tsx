/* eslint-disable jsx-a11y/label-has-associated-control */

import {useForm} from "react-hook-form";
import {toast} from "react-toastify";

import auth from "@/firebase/auth";
import useAuth from "@/hooks/useAuth";

export interface Props {
  namespaceId: string;
}
export default function SubscribeForm(): JSX.Element {
  const {authState} = useAuth();

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const {register, handleSubmit} = useForm({
    defaultValues: {
      email: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/require-await
  const onSubmit = async (data: {email: string}) => {
    if (!authState?.uid) {
      return null;
    }

    toast.info("Loading...");

    // eslint-disable-next-line no-void
    void auth
      .signInAnonymously()
      .then(() => {
        auth.onAuthStateChanged(user => {
          // eslint-disable-next-line no-console
          console.log(user?.uid, data.email);
        });
      })
      .catch(err => {
        toast.error(err);
      });

    return null;
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-6 rounded-md shadow-sm md:mt-8 lg:mt-10 xl:mt-12">
            <input
              ref={register}
              required
              aria-label="Email address"
              name="email"
              type="email"
              className="relative block w-full px-3 py-3 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-pink-300 focus:z-10 sm:text-sm sm:leading-5"
              placeholder="Your email address"
            />
          </div>
          <div className="mt-6 rounded-md shadow md:mt-5 lg:mt-6 xl:mt-8">
            <button
              type="submit"
              className="flex items-center justify-center w-full px-3 py-3 font-medium text-white rounded-md bg-gradient-to-r hover:from-purple-300 hover:via-pink-400 hover:to-red-400 from-purple-400 via-pink-500 to-red-500 md:text-lg md:px-20"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
