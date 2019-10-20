import React from 'react'
import {View, Text} from 'react-native'
import { Feather } from '@expo/vector-icons'
import { Separator } from '../common/Separator'
import { TouchableOpacity } from '../common/TouchableOpacity'

const ProfileMenuRowItem = ({icon, attribute, onPress}) => {
    return(
        <View>
            <TouchableOpacity
                onPress={onPress}
                style={{
                    padding: 15,
                    alignItems: 'center',
                    flexDirection: 'row'
                }}
            >
            <Feather name={icon} size={18} />
            <Text style={{paddingLeft: 10, fontSize: 16}}>{attribute}</Text>
            </TouchableOpacity>
            <Separator />
        </View>
    )
}

export default ProfileMenuRowItem