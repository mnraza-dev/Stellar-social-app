import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

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
  },
  buttonText: {
    color: "white",
  },
});
