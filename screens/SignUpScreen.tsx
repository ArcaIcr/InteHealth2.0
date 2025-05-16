import { SignUpPage } from '../components/signup/SignUpPage';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  SignUp: undefined;
  PatientDashboard: undefined;
  PharmacistDashboard: undefined;
};

export const SignUpScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SignUpPage
      onLogin={() => navigation.navigate('Login')}
      onCreateAccount={(data) => {
        // For prototyping, navigate to the appropriate dashboard based on role
        if (data.role === 'patient') {
          navigation.navigate('PatientDashboard');
        } else if (data.role === 'pharmacist') {
          navigation.navigate('PharmacistDashboard');
        }
        console.log('Create account with', data);
      }}
    />
  );
}; 