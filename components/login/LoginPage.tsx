import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container } from '../Container';

export type LoginPageProps = {
  onForgotPassword: () => void;
  onSignUp: () => void;
  onSignIn: (email: string, password: string) => void;
};

import { useState } from 'react';

export const LoginPage = ({ onForgotPassword, onSignUp, onSignIn }: LoginPageProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView className="flex-1 bg-dirtywhite justify-center">
      <Container>
        <View className="flex-1 justify-center items-center">
          <View className="bg-white rounded-3xl shadow p-8 w-full max-w-md items-center">
            <Image source={require('../../assets/branding/logo/Brand_Logo.png')} className="w-14 h-14 mb-2" resizeMode="contain" />
            <Text className="text-2xl font-bold text-brand-navy mb-1">Inte<Text className="text-brand-cyan">Health</Text></Text>
            <View className="my-2">
              <Text className="text-3xl text-brand-navy font-semibold text-center">Login</Text>
            </View>
            <View className="w-full mt-4">
              <TextInput
                className="bg-dirtywhite rounded-xl px-4 py-3 mb-3 text-base border border-gray-200"
                placeholder="Email"
                placeholderTextColor="#A0AEC0"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
              />
              <TextInput
                className="bg-dirtywhite rounded-xl px-4 py-3 mb-3 text-base border border-gray-200"
                placeholder="Password"
                placeholderTextColor="#A0AEC0"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <TouchableOpacity
                className="bg-brand-navy rounded-full py-3 mt-2 mb-2"
                onPress={() => onSignIn(email, password)}
              >
                <Text className="text-white text-center text-lg font-semibold">Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={onForgotPassword} className="mt-1 mb-2">
                <Text className="text-center text-brand-brightred font-medium">Forgot Password?</Text>
              </TouchableOpacity>
              <View className="flex-row justify-center mt-2">
                <Text className="text-base text-brand-navy">Don't have an account? </Text>
                <TouchableOpacity onPress={onSignUp}>
                  <Text className="text-base text-brand-brightred font-semibold">Sign up here</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Container>
    </SafeAreaView>
  );
}; 