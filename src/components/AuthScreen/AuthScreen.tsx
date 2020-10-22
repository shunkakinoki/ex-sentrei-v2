import ContainerCenter from "@/components/ContainerCenter";
import ContainerRoot from "@/components/ContainerRoot";
import HeaderRoot from "@/components/HeaderRoot";
import AuthForm, {Props as AuthFormProps} from "@/components/AuthForm";

export type Props = AuthFormProps;

export default function AuthScreen({type}: Props): JSX.Element {
  return (
    <ContainerRoot>
      <HeaderRoot />
      <ContainerCenter>
        <AuthForm type={type} />
      </ContainerCenter>
    </ContainerRoot>
  );
}
