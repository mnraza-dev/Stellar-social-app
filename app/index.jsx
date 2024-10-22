import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper";
const index = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="white" >
      <Text>Mera Namsakara</Text>
      <Button title="Welcome" onPress={() => router.push("welcome")}>
        Go to Welcome
      </Button>
    </ScreenWrapper>
  );
};

export default index;
