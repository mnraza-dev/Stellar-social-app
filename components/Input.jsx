import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'
import { theme } from '../constants/theme'
import { hp } from '../helper/common'

const Input = (props) => {
    return (
        <View style={[styles.container, props.containerStyle && props.containerStyle]}>
            {
                props.icon && props.icon
            }
            <TextInput
                placeholderTextColor={theme.colors.textLight}
                ref={props.inputRef && props.inputRef}
                {...props} />

        </View>
    )
}

export default Input

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10,
        marginTop:12,
        borderRadius: 10,
        width:'100%',
        height:hp(7.2),
        borderWidth:0.4,
        borderColor:theme.colors.text,
        borderRadius:theme.radius.xxl,
        paddingHorizontal:18,
        gap:15,
        alignItems:"center",
        justifyContent:"start"
    },
    
})