/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Router from "next/router";
import {useEffect} from "react";

import performance from "@/firebase/performance";
import useAuth from "@/hooks/useAuth";
import useProfile from "@/hooks/useProfile";
import {pageView, identifyUser} from "@/utils/segment";

export default function GlobalAnalytics(): null {
  const {authState} = useAuth();
  const {profile} = useProfile();

  useEffect(() => {
    performance();
  }, []);

  useEffect((): void => {
    if (!authState || !profile) {
      return;
    }

    identifyUser(authState.uid, {
      avatar: authState.photoURL,
      displayName: profile.name,
      email: authState.email,
      name: profile.name,
      userId: authState.uid,
      username: profile.namespaceId,
    });
  }, [authState, profile]);

  useEffect(() => {
    const handleRouteChange = (): void => {
      pageView();
    };

    Router.events.on("routeChangeComplete", handleRouteChange);
    return (): void => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  });

  return null;
}
