import {useRouter} from "next/router";
import {useEffect} from "react";

import AuthScreen from "@/components/AuthScreen";
import useAuth from "@/hooks/useAuth";

export default function LoginScreen(): JSX.Element {
  const {isLoggedIn} = useAuth();
  const router = useRouter();

  useEffect(() => {
    async function pushDemo() {
      if (isLoggedIn) {
        await router.push("/demo");
      }
    }
    // eslint-disable-next-line no-void
    void pushDemo();
  }, [router, isLoggedIn]);

  return <AuthScreen type="login" />;
}
