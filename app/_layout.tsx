import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { ReactNode, useEffect, useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AuthProvider, useAuth } from '../lib/AuthContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (loaded) {
      setIsReady(true);
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!isReady) {
    return null;
  }

  return (
    <AuthProvider>
      <AuthCheck>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
            <Stack.Screen name="onboarding/WelcomeScreen" options={{ headerShown: false }}/>
            <Stack.Screen name="onboarding/TrackYourGoal" options={{ headerShown: false }} />
            <Stack.Screen name="onboarding/GetBurn" options={{ headerShown: false }} />
            <Stack.Screen name="onboarding/EatWell" options={{ headerShown: false }} />
            <Stack.Screen name="onboarding/ImproveSleepQuality" options={{ headerShown: false }} />
            <Stack.Screen name="authentication/ForgotPasswordScreen" options={{ headerShown: false }} />
            <Stack.Screen name="authentication/LoginForm" options={{ headerShown: false }} />
            <Stack.Screen name="authentication/RegisterForm" options={{ headerShown: false }} />
            <Stack.Screen name="authentication/SuccessScreen" options={{ headerShown: false }} />
            <Stack.Screen name="authentication/AuthForm" options={{ headerShown: false }} />
            <Stack.Screen name="information/ProfileCompletion" options={{ headerShown: false }} />
            <Stack.Screen name="fitnessScreens/AddMeal" options={{ title: 'Add Meal', headerShown: false }} />
            <Stack.Screen name="fitnessScreens/AddWater" options={{ title: 'Add Water', headerShown: false }} />
            <Stack.Screen name="fitnessScreens/EditProfileScreen" options={{ title: 'Edit Profile', headerShown: false }} />
          </Stack>
        </ThemeProvider>
      </AuthCheck>
    </AuthProvider>
  );
}

const AuthCheck: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return null; 
  }

  if (!isAuthenticated) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="authentication/AuthForm" options={{ headerShown: false }} />
      </Stack>
    );
  }

  return <>{children}</>;
};
