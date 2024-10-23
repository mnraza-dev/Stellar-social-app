import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from "../components/ScreenWrapper";
import { StatusBar } from 'expo-status-bar';

const SignUp = () => {
  return (
    <ScreenWrapper bg={"white"} style={{ flex: 1 }}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <Text>Sign Up</Text>
      </View>
    </ScreenWrapper>
  )
}

export default SignUp

const styles = StyleSheet.create({})