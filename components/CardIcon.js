import React from 'react'
import { View } from 'react-native'
import { COLOR_PALETTE } from '../helpers/colors'
import Icon from 'react-native-vector-icons/FontAwesome'


const CardIcon = ({ name, checked, style }) => {
    return (
        <View style={{ style }}>
            <Icon
                name={name}
                size={25}
                color={
                    !checked ? COLOR_PALETTE.secondary : COLOR_PALETTE.disabled
                }
            />
        </View>
    )
}
export default CardIcon
