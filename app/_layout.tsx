import React, { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { Stack } from 'expo-router';
import { createTamagui, TamaguiProvider, View } from 'tamagui';
import { DefaultTheme } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { defaultConfig } from '@tamagui/config/v4';
import { ToastProvider } from '@tamagui/toast';

export default function Layout() {
  const router = useRouter();

  const config = createTamagui(defaultConfig);

  useEffect(() => {
    const prepare = async () => {
      router.replace('/dashboard');
    };
    prepare();
  }, []);

  return (
    <TamaguiProvider config={config}>
      <ToastProvider>
        <Stack>
          <Stack.Screen name="dashboard" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </ToastProvider>
    </TamaguiProvider>
  );
}
