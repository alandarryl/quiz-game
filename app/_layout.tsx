// app/_layout.tsx
import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#6200ee' }, // Violet type Quiz
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
        headerTitle: "Quiz Master 🏆",
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Accueil' }} />
      <Stack.Screen name="quiz" options={{ title: 'C\'est parti !' }} />
      <Stack.Screen name="leaderboard" options={{ title: 'Classement' }} />
    </Stack>
  );
}