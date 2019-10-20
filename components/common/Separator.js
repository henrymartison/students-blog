import React from 'react'
import {View, StyleSheet} from 'react-native'

export const Separator = ({left = 18}) => {
    return(
        <View style={{
            height: StyleSheet.hairlineWidth,
            backgroundColor: '#ccc',
            marginLeft: left
        }} />
    )
}
