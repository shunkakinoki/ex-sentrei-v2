import ContainerCenter from "@/components/ContainerCenter";
import ContainerRoot from "@/components/ContainerRoot";
import LandingHeader from "@/components/LandingHeader";
import AuthForm, {Props as AuthFormProps} from "@/components/AuthForm";

export type Props = AuthFormProps;

export default function AuthScreen({type}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <LandingHeader />
      <ContainerCenter>
        <AuthForm type={type} />
      </ContainerCenter>
    </ContainerRoot>
  );
}
