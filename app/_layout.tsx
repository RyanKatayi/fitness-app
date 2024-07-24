import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AuthProvider } from '../lib/AuthContext';

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
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
          <Stack.Screen name="onboarding/WelcomeScreen" options={{ headerShown: false }}/>
          <Stack.Screen name="onboarding/TrackYourGoal" options={{ headerShown: false }}/>
          <Stack.Screen name="onboarding/GetBurn" options={{ headerShown: false }}/>
          <Stack.Screen name="onboarding/EatWell" options={{ headerShown: false }}/>
          <Stack.Screen name="onboarding/ImproveSleepQuality" options={{ headerShown: false }}/>
          <Stack.Screen name="authentication/ForgotPasswordScreen" options={{ headerShown: false }} />
          <Stack.Screen name="authentication/LoginForm" options={{ headerShown: false }} />
          <Stack.Screen name="authentication/RegisterForm" options={{ headerShown: false }} />
          <Stack.Screen name="authentication/SuccessScreen" options={{ headerShown: false }} />
          <Stack.Screen name="authentication/AuthForm" options={{ headerShown: false }} />
          <Stack.Screen name="information/ProfileCompletion" options={{ headerShown: false }}/>
          {/* <Stack.Screen name="fitness/WorkoutsScreen" options={{ title: 'Workouts' }} />
          <Stack.Screen name="fitness/AddWorkout" options={{ title: 'Add Workout' }} />
          <Stack.Screen name="fitness/NutritionScreen" options={{ title: 'Nutrition' }} /> */}
          <Stack.Screen name="fitnessScreens/AddMeal" options={{ title: 'Add Meal', headerShown: false, headerBackTitleVisible: true }} />
          <Stack.Screen name="fitnessScreens/AddProgress" options={{ title: 'Add Progress' }} />
          <Stack.Screen name="fitnessScreens/AddWorkout" options={{ title: 'Add Workout' }} />
        </Stack>
      </ThemeProvider>
    </AuthProvider>
  );
}