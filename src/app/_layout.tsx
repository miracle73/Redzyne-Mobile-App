import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
      {/* 
      <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
        title: "Home screen",
        }}
      />
      <Stack.Screen
        name="about"
        options={{
        title: "About screen",
        }}
      />
      </Stack> */}
    </>
  );
}
