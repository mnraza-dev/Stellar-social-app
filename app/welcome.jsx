import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from "expo-status-bar";
import { wp, hp } from "../helper/common";
import { theme } from "../constants/theme";

import Button from "../components/Button";

const Welcome = () => {
  return (
    <ScreenWrapper bg={"white"} style={{ flex: 1 }}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={require("../assets/images/welcome.png")}
          style={styles.ImageContainer}
        />

        <View style={{ gap: 20 }}>
          <Text style={styles.title}> Stellar App</Text>
          <Text style={styles.punchLine}>
            Share your creativity, celebrate moments, and engage authentically.
          </Text>
        </View>

        <View style={styles.footer}>
          <Button
            style={styles.welcomeButton}
            title="Getting Started"
            onPress={() => alert("Welcome")}
          ></Button>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: wp(4),
  },
  ImageContainer: {
    width: wp(100),
    height: hp(30),
    alignSelf: "center",
  },
  welcomeButton: {
    padding: 20,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
  },
  title: {
    fontSize: hp(4),
    fontWeight: theme.fonts.extrabold,
    textAlign: "center",
    color: theme.colors.text,
  },
  punchLine: {
    fontSize: hp(1.9),
    paddingHorizontal: wp(10),

    textAlign: "center",
    color: theme.colors.text,
  },
  footer: {
    gap: 20,
  },
});
