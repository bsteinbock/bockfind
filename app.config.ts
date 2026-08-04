import type { ExpoConfig } from 'expo/config';

type AppVariant = 'development' | 'production';

function resolveVariant(): AppVariant {
  return process.env.APP_VARIANT === 'development' ? 'development' : 'production';
}

function shouldEnableReactNativeLegalPlugin(): boolean {
  const argv = process.argv.join(' ');

  // The legal plugin writes native artifacts under ios/android. Only run it when
  // we are in an actual native build context.
  return (
    process.env.EAS_BUILD === '1' ||
    argv.includes('prebuild') ||
    argv.includes('run:android') ||
    argv.includes('run:ios')
  );
}

export default (): ExpoConfig => {
  const variant = resolveVariant();
  const isDevelopment = variant === 'development';
  const enableLegalPlugin = shouldEnableReactNativeLegalPlugin();

  const appName = isDevelopment ? 'BockFind Dev' : 'BockFind';
  const bundleIdentifier = isDevelopment ? 'com.bsteinbk.bockfind.dev' : 'com.bsteinbk.bockfind';
  const androidPackage = isDevelopment ? 'com.bsteinbk.bockfind.dev' : 'com.bsteinbk.bockfind';
  const scheme = isDevelopment ? 'bockfind-dev' : 'bockfind';

  return {
    name: appName,
    slug: 'bockfind',
    scheme,
    version: '1.0.0',
    orientation: 'default',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    ios: {
      supportsTablet: true,
      bundleIdentifier,
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      adaptiveIcon: {
        backgroundColor: '#F4DA17',
        foregroundImage: './assets/android-icon-foreground.png',
        monochromeImage: './assets/android-icon-monochrome.png',
      },
      package: androidPackage,
    },
    web: {
      favicon: './assets/favicon.png',
    },
    plugins: ['expo-router', 'expo-status-bar', ...(enableLegalPlugin ? ['react-native-legal'] : [])],
    extra: {
      router: {},
      appVariant: variant,
      eas: {
        projectId: '4dbd280c-4519-4dbf-8d4c-72638ffa40d3',
      },
    },
    runtimeVersion: {
      policy: 'appVersion',
    },
    updates: {
      url: 'https://u.expo.dev/4dbd280c-4519-4dbf-8d4c-72638ffa40d3',
      checkAutomatically: 'ON_LOAD',
      fallbackToCacheTimeout: 0,
    },
  };
};
