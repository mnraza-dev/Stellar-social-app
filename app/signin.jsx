import { StyleSheet, View, Text } from 'react-native'
import React, { useRef, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import ScreenWrapper from "../components/ScreenWrapper";
import { theme } from '../constants/theme';
import { StatusBar } from 'expo-status-bar';
import BackButton from '../components/BackButton';
import { useRouter } from 'expo-router';
import Button from "../components/Button";
import { wp, hp } from "../helper/common";

import Input from "../components/Input";

const SignIn = () => {
  const router = useRouter()

  const emailRef = useRef("")
  const passwordRef = useRef("")
  const [loading, setLoading] = useState(false);


  return (
    <ScreenWrapper bg={"white"} style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />
        {/* Welcome Text */}
        <View style={styles.welcomeTextContainer}>
          <Text style={styles.welcomeText}>
            Hey !
          </Text>

          <Text style={styles.welcomeText}>
            Welcome back
          </Text>

        </View>
        {/* Forms Fields  */}
        <View style={styles.form}>
          <Text style={styles.formText}>
            Please continue to login
          </Text>

          <Input icon={<Ionicons name="mail" size={24} color={theme.colors.primary}
            onChangeText={value => emailRef.current = value}
            placeholder="Enter Your Email "
          />} />

          <Input icon={<Ionicons name="eye" size={24} color={theme.colors.primary}
            secureTextEntry
            onChangeText={value => passwordRef.current = value}
            placeholder="***********"
          />} />

        </View>
        <View style={styles.signInButtonWrapper}>
          <Button title='Sign In' onPress={() => setLoading(true)} loading={loading} />
        </View>
      </View>
      <Ionicons name="home" size={30} color={theme.colors.primary} />
    </ScreenWrapper>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp(4),
  },
  form: {

  },
  welcomeTextContainer: {
    marginTop: hp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    color: theme.colors.text,
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },
  formText: {
    fontSize: hp(2),
    textAlign: 'left',
    marginTop: hp(2),
    color: theme.colors.text,
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },
  signInButtonWrapper: {
    paddingTop: hp(5)
  }
})