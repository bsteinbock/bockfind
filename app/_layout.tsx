import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { applyOtaUpdateIfAvailable } from '../utils/ota-updates';
import { useThemeColors } from '../theme/colors';

export default function RootLayout() {
  const colors = useThemeColors();
  const colorScheme = useColorScheme();

  useEffect(() => {
    applyOtaUpdateIfAvailable();
  }, []);

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: colors.background }}>
        <KeyboardProvider>
          <StatusBar style={colorScheme === 'light' ? 'dark' : 'light'} />
          <Stack
            screenOptions={{
              headerStyle: { backgroundColor: colors.backgroundSoft },
              headerShadowVisible: false,
              headerTintColor: colors.text,
              contentStyle: { backgroundColor: colors.background },
            }}
          >
            <Stack.Screen name="index" options={{ title: 'Back', headerShown: false }} />
            <Stack.Screen
              name="game"
              options={{
                title: 'Word Search',
                headerBackButtonDisplayMode: 'minimal',
              }}
            />
          </Stack>
        </KeyboardProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
