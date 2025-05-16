import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container } from '../Container';

export type LandingPageProps = {
  onLogin: () => void;
  onSignUp: () => void;
};

export const LandingPage = ({ onLogin, onSignUp }: LandingPageProps) => (
  <SafeAreaView className="flex-1 bg-dirtywhite">
    <Container>
      <View className="pt-4">
        <View className="flex flex-row justify-between items-center mt-2 mb-6">
          <View className="flex flex-row items-center">
            <Image source={require('../../assets/branding/logo/Brand_Logo.png')} className="w-10 h-10 mr-2" resizeMode="contain" />
            <Text className="text-2xl font-bold text-brand-navy">Inte<Text className="text-brand-cyan">Health</Text></Text>
          </View>
          <TouchableOpacity onPress={onLogin} className="border border-brand-navy rounded-full px-5 py-1">
            <Text className="text-base text-brand-navy">Login</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-3xl font-bold mb-1 text-brand-navy">Welcome to InteHealth</Text>
        <Text className="text-lg text-brand-brightred mb-6">Your complete healthcare companion</Text>
        <View className="flex flex-row justify-between mb-8">
          <View className="items-center mx-2 bg-white rounded-2xl p-4 shadow">
            <View className="bg-brand-cyan rounded-full p-4 mb-2">
              <Text className="text-2xl text-brand-navy">＋</Text>
            </View>
            <Text className="text-base text-brand-navy">Records</Text>
          </View>
          <View className="items-center mx-2 bg-white rounded-2xl p-4 shadow">
            <View className="bg-brand-cyan rounded-full p-4 mb-2">
              <Text className="text-2xl text-brand-navy">👤</Text>
            </View>
            <Text className="text-base text-brand-navy">Find{"\n"}Doctors</Text>
          </View>
          <View className="items-center mx-2 bg-white rounded-2xl p-4 shadow">
            <View className="bg-brand-cyan rounded-full p-4 mb-2">
              <Text className="text-2xl text-brand-navy">💬</Text>
            </View>
            <Text className="text-base text-brand-navy">24/7{"\n"}Support</Text>
          </View>
        </View>
        <View className="bg-white rounded-2xl p-6 mb-8 shadow">
          <Text className="text-xl font-semibold mb-4 text-brand-navy">Why InteHealth?</Text>
          <View className="flex flex-row items-center mb-2">
            <Text className="text-lg mr-2" style={{color: '#FFC107'}}>🗂️</Text>
            <Text className="text-base text-brand-navy">Manage your health records securely</Text>
          </View>
          <View className="flex flex-row items-center mb-2">
            <Text className="text-lg mr-2" style={{color: '#F8333C'}}>📅</Text>
            <Text className="text-base text-brand-navy">Book and track appointments easily</Text>
          </View>
          <View className="flex flex-row items-center mb-2">
            <Text className="text-lg mr-2" style={{color: '#0C182C'}}>💬</Text>
            <Text className="text-base text-brand-navy">Communicate with healthcare providers</Text>
          </View>
          <View className="flex flex-row items-center mb-2">
            <Text className="text-lg mr-2" style={{color: '#FFC107'}}>🔔</Text>
            <Text className="text-base text-brand-navy">Receive reminders for medications and checkups</Text>
          </View>
          <Text className="text-center text-brand-brightred mt-4 italic">Start your journey towards better health management today!</Text>
        </View>
        <TouchableOpacity onPress={onSignUp} className="bg-brand-navy rounded-full py-4 mt-auto mb-6">
          <Text className="text-white text-center text-lg font-semibold">Get Started</Text>
        </TouchableOpacity>
      </View>
    </Container>
  </SafeAreaView>
); 