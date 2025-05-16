import { LandingPage } from '../components/landing/LandingPage';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define your navigation stack param list
// Adjust as needed for your app
export type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  SignUp: undefined;
};

export const LandingScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <LandingPage
      onLogin={() => navigation.navigate('Login')}
      onSignUp={() => navigation.navigate('SignUp')}
    />
  );
}; 