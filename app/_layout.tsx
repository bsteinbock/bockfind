import { useColorScheme } from 'react-native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import { useThemeColors } from '../theme/colors';

export default function RootLayout() {
  const colors = useThemeColors();
  const colorScheme = useColorScheme();

  return (
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
          <Stack.Screen name="game" options={{ title: 'Word Search' }} />
        </Stack>
      </KeyboardProvider>
    </GestureHandlerRootView>
  );
}
