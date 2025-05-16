import { View, Text, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Container } from '../Container';
import { useState } from 'react';

export type SignUpPageProps = {
  onLogin: () => void;
  onCreateAccount: (data: any) => void;
};

export const SignUpPage = ({ onLogin, onCreateAccount }: SignUpPageProps) => {
  const [role, setRole] = useState<'patient' | 'pharmacist'>('patient');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [pharmacyAssigned, setPharmacyAssigned] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRetypePassword, setShowRetypePassword] = useState(false);
  const [agree, setAgree] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-dirtywhite justify-center">
      <Container>
        <View className="flex-1 justify-center items-center">
          <View className="bg-white rounded-3xl shadow p-8 w-full max-w-md items-center">
            <Image source={require('../../assets/branding/logo/Brand_Logo.png')} className="w-14 h-14 mb-2" resizeMode="contain" />
            <Text className="text-2xl font-bold text-brand-navy mb-1">Inte<Text className="text-brand-cyan">Health</Text></Text>
            <View className="my-2 items-center">
              <Text className="text-3xl text-brand-navy font-semibold text-center">Sign Up</Text>
            </View>
            <View className="flex-row w-full justify-center mb-4 mt-2">
              <TouchableOpacity
                className={`flex-1 items-center py-3 rounded-2xl border mr-2 ${role === 'patient' ? 'bg-brand-navy' : 'bg-white'} ${role === 'patient' ? 'border-brand-navy' : 'border-gray-200'}`}
                onPress={() => setRole('patient')}
              >
                <Text className={`text-2xl mb-1 ${role === 'patient' ? 'text-white' : 'text-brand-navy'}`}>➕</Text>
                <Text className={`${role === 'patient' ? 'text-white' : 'text-brand-navy'}`}>Patient</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={`flex-1 items-center py-3 rounded-2xl border ml-2 ${role === 'pharmacist' ? 'bg-brand-navy' : 'bg-white'} ${role === 'pharmacist' ? 'border-brand-navy' : 'border-gray-200'}`}
                onPress={() => setRole('pharmacist')}
              >
                <Text className={`text-2xl mb-1 ${role === 'pharmacist' ? 'text-white' : 'text-brand-navy'}`}>👜</Text>
                <Text className={`${role === 'pharmacist' ? 'text-white' : 'text-brand-navy'}`}>Pharmacist</Text>
              </TouchableOpacity>
            </View>
            <View className="w-full mt-2">
              <TextInput
                className="bg-dirtywhite rounded-xl px-4 py-3 mb-3 text-base border border-gray-200"
                placeholder="Full Name"
                placeholderTextColor="#A0AEC0"
                value={fullName}
                onChangeText={setFullName}
              />
              <TextInput
                className="bg-dirtywhite rounded-xl px-4 py-3 mb-3 text-base border border-gray-200"
                placeholder="Email"
                placeholderTextColor="#A0AEC0"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"
              />
              <View className="relative mb-3">
                <TextInput
                  className="bg-dirtywhite rounded-xl px-4 py-3 text-base border border-gray-200 pr-12"
                  placeholder="Password"
                  placeholderTextColor="#A0AEC0"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                />
                <Pressable className="absolute right-4 top-4" onPress={() => setShowPassword(!showPassword)}>
                  <Text className="text-xl text-brand-navy">👁️</Text>
                </Pressable>
              </View>
              <View className="relative mb-3">
                <TextInput
                  className="bg-dirtywhite rounded-xl px-4 py-3 text-base border border-gray-200 pr-12"
                  placeholder="Retype Password"
                  placeholderTextColor="#A0AEC0"
                  value={retypePassword}
                  onChangeText={setRetypePassword}
                  secureTextEntry={!showRetypePassword}
                />
                <Pressable className="absolute right-4 top-4" onPress={() => setShowRetypePassword(!showRetypePassword)}>
                  <Text className="text-xl text-brand-navy">👁️</Text>
                </Pressable>
              </View>
              {role === 'patient' ? (
                <>
                  <TextInput
                    className="bg-dirtywhite rounded-xl px-4 py-3 mb-3 text-base border border-gray-200"
                    placeholder="Contact Number"
                    placeholderTextColor="#A0AEC0"
                    value={contactNumber}
                    onChangeText={setContactNumber}
                    keyboardType="phone-pad"
                  />
                  <TextInput
                    className="bg-dirtywhite rounded-xl px-4 py-3 mb-3 text-base border border-gray-200"
                    placeholder="Address"
                    placeholderTextColor="#A0AEC0"
                    value={address}
                    onChangeText={setAddress}
                  />
                </>
              ) : (
                <TextInput
                  className="bg-dirtywhite rounded-xl px-4 py-3 mb-3 text-base border border-gray-200"
                  placeholder="Pharmacy Assigned"
                  placeholderTextColor="#A0AEC0"
                  value={pharmacyAssigned}
                  onChangeText={setPharmacyAssigned}
                />
              )}
              <Text className="text-xs text-gray-500 mb-2">
                Password must be at least 6 characters, include uppercase, lowercase, and a number.
              </Text>
              <View className="flex-row items-center mb-4">
                <TouchableOpacity onPress={() => setAgree(!agree)} className="mr-2">
                  <View className={`w-5 h-5 rounded border ${agree ? 'bg-brand-navy border-brand-navy' : 'border-gray-400 bg-white'}`}>{agree ? <Text className="text-white text-center">✓</Text> : null}</View>
                </TouchableOpacity>
                <Text className="text-sm text-brand-navy">I agree to the</Text>
                <TouchableOpacity>
                  <Text className="text-sm text-brand-brightred ml-1 underline">Terms and Conditions</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                className={`bg-brand-navy rounded-full py-3 mb-2 ${!agree ? 'opacity-50' : ''}`}
                disabled={!agree}
                onPress={() => onCreateAccount({ role, fullName, email, password, retypePassword, contactNumber, address, pharmacyAssigned })}
              >
                <Text className="text-white text-center text-lg font-semibold">Create Account</Text>
              </TouchableOpacity>
              <View className="flex-row justify-center mt-2">
                <Text className="text-base text-brand-navy">Already have an account? </Text>
                <TouchableOpacity onPress={onLogin}>
                  <Text className="text-base text-brand-brightred font-semibold">Log in here</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Container>
    </SafeAreaView>
  );
}; 