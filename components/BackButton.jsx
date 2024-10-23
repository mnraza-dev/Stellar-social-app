import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../constants/theme'

const BackButton = ({ router }) => {
    return (
        <Pressable style={styles.backButton} onPress={() => router.back()}>
            <Ionicons name="arrow-back-sharp" size={36} color={theme.colors.dark} />
        </Pressable>
    )
}

export default BackButton

const styles = StyleSheet.create({
    backButton:{
        alignSelf:'flex-start',
        backgroundColor:'rgba(0,0,0,0.07)',
        padding:10,
        borderRadius:theme.radius.sm,
    }
})