import { useEffect, useState } from 'react';
import { useRouter, useSegments } from 'expo-router';
import { useAuth } from '@/lib/AuthContext';

export default function HomeScreen() {
  const router = useRouter();
  const segments = useSegments();
  const { isAuthenticated, loading } = useAuth();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!loading && isMounted) {
      if (isAuthenticated) {
        router.replace('/tabs');
      } else if (segments.length === 0) {
        router.replace('/onboarding/WelcomeScreen');
      }
    }
  }, [segments, router, isMounted, loading, isAuthenticated]);

  return null;
}
