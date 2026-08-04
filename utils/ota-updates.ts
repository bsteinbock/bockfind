import * as Updates from 'expo-updates';

export async function applyOtaUpdateIfAvailable(): Promise<void> {
  if (__DEV__ || !Updates.isEnabled) {
    return;
  }

  try {
    const update = await Updates.checkForUpdateAsync();

    if (!update.isAvailable) {
      return;
    }

    await Updates.fetchUpdateAsync();
    await Updates.reloadAsync();
  } catch {
    // Keep app startup resilient even if update checks fail.
  }
}
