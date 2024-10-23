import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from 'expo-status-bar';

const SignIn = () => {
  return (
    <ScreenWrapper bg={"white"} style={{ flex: 1 }}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <Text>SignIn</Text>
      </View>
    </ScreenWrapper>
  )
}

export default SignIn

const styles = StyleSheet.create({})