import { SignUpPage } from '../components/signup/SignUpPage';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  SignUp: undefined;
};

export const SignUpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SignUpPage
      onLogin={() => navigation.navigate('Login')}
      onCreateAccount={(data) => {
        // TODO: Implement create account logic
        console.log('Create account with', data);
      }}
    />
  );
}; 