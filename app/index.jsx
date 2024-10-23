import React from "react";
import { useRouter } from "expo-router";
import ScreenWrapper from "../components/ScreenWrapper";

import Button from "../components/Button";
const index = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg="white" >

      <Button title="Welcome" onPress={() => {
        try {
          router.push("welcome");
        } catch (error) {
          console.error("Navigation error:", error);
        }
      }}>
        Welcome Screen 
      </Button>
    </ScreenWrapper>
  );
};

export default index;
