/* eslint-disable jsx-a11y/label-has-associated-control */

import Router from "next/router";
import {useEffect} from "react";
import {useForm} from "react-hook-form";
import {toast} from "react-toastify";

import spaceCustomerCreate from "@/callable/spaceCustomerCreate";
import auth from "@/firebase/auth";
import useAuth from "@/hooks/useAuth";
import {validateCustomer} from "@/services/Customer";
import Space from "@/types/Space";

export interface Props {
  namespaceId: string;
  space: Space.Get;
  spaceId?: string;
}

export default function SubscribeForm({
  namespaceId,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  space,
  spaceId,
}: Props): JSX.Element {
  const {authState} = useAuth();

  useEffect(() => {
    async function replaceUpgrade() {
      if (authState && spaceId) {
        if (await validateCustomer(spaceId, authState.uid))
          // eslint-disable-next-line no-void
          void Router.replace("/upgrade");
      }
    }
    if (namespaceId !== "demo") {
      // eslint-disable-next-line no-void
      void replaceUpgrade();
    }
  }, [authState, spaceId, namespaceId]);

  // eslint-disable-next-line @typescript-eslint/unbound-method
  const {register, handleSubmit} = useForm({
    defaultValues: {
      email: "",
    },
  });

  // eslint-disable-next-line @typescript-eslint/require-await
  const onSubmit = async (data: {email: string}): Promise<void> => {
    if (namespaceId === "demo") {
      toast.success("Subscribed!");
      return;
    }

    if (!spaceId) {
      return;
    }

    toast.info("Loading...");
    if (!authState?.uid) {
      // eslint-disable-next-line no-void
      void auth
        .signInAnonymously()
        .then(() => {
          auth.onAuthStateChanged(() => {
            // eslint-disable-next-line no-void
            void spaceCustomerCreate(data.email, spaceId);
            setTimeout(() => {
              // eslint-disable-next-line no-void
              void Router.replace("/upgrade");
            }, 1000);
          });
        })
        .catch(err => {
          toast.error(err);
        });
    } else if (authState.email) {
      // eslint-disable-next-line no-void
      void spaceCustomerCreate(authState.email, spaceId);
      setTimeout(() => {
        // eslint-disable-next-line no-void
        void Router.replace("/upgrade");
      }, 1000);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit(onSubmit)}>
          {!authState?.uid && (
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
          )}
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
