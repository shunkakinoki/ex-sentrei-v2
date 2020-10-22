import {NextPage} from "next";
import AuthScreen from "@/components/AuthScreen";

const ResetPassword: NextPage = () => {
  return <AuthScreen type="reset-password" />;
};

export default ResetPassword;
