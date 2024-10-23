import { Pressable, StyleSheet, Text , View } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import { hp, wp } from "../helper/common";
import Loading from "./Loading";

const Button = ({
  onPress = () => { },
  title = "",
  textStyle,
  buttonStyle,
  hasShadow = true,
  loading = false,
}) => {

  if (loading) {
    return <View style={[styles.button, buttonStyle, { backgroundColor: 'white' }]}>
      <Loading />
    </View>
  }
  const shadowStyle = {
    shadowColor: theme.colors.dark,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  };
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
    display: 'flex',
    justifyContent: "center",
    paddingHorizontal: wp(12),
    height: hp(5),
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: hp(1.7),
    fontWeight: theme.fonts.bold,
    textAlign: "center",
  },
});
