import React from 'react';
import { useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

export default function appLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="dashboard" options={{ headerShown: false }} />
        <Stack.Screen name="not_found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
