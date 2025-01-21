import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { Stack } from "expo-router";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { TrainingDataProvider } from "@/components/training_management/training_data_context";

export default function Layout() {
  const router = useRouter();

  useEffect(() => {
    const prepare = async () => {
      router.replace("/dashboard");
    };
    prepare();
  }, []);

  return (
    <ThemeProvider value={DefaultTheme}>
    <TrainingDataProvider>

      <Stack>
        <Stack.Screen name="dashboard" options={{ headerShown: false }} />
      </Stack>
    </TrainingDataProvider>

      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
