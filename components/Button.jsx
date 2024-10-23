import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import { hp, wp } from "../helper/common";

const Button = ({
  onPress = () => {},
  title = "",
  textStyle,
  buttonStyle,
  hasShadow = true,
  loading = false,
}) => {
  const shadowStyle = {};
  return (
    <Pressable
      loading={loading}
      onPress={onPress}
      style={[styles.button, buttonStyle, hasShadow && shadowStyle]}
    >
      <Text style={[styles.buttonText, textStyle]} title={title}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,

    padding: 10,
    display:'flex',
    justifyContent: "center",
    paddingHorizontal:wp(12),
    height:hp(5),
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: hp(1.7),
    fontWeight: theme.fonts.bold,
    textAlign: "center",
  },
});
