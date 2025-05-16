import { LoginPage } from '../components/login/LoginPage';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  SignUp: undefined;
  ForgotPassword: undefined;
};

export const LoginScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <LoginPage
      onForgotPassword={() => navigation.navigate('ForgotPassword')}
      onSignUp={() => navigation.navigate('SignUp')}
      onSignIn={(email, password) => {
        // TODO: Implement sign in logic
        console.log('Sign in with', email, password);
      }}
    />
  );
}; 