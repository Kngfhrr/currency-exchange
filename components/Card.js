import styles from '../styles/card.scss'

import * as React from 'react'
import CardIcon from './CardIcon'

import { useTheme } from '@react-navigation/native'
import { Text, TouchableOpacity } from 'react-native'


const Card = ({ title, onPress, isChecked, handleCardPress, disabled }) => {

    const { colors } = useTheme()

    return (
        <TouchableOpacity
            onPress={() => {
                !disabled && handleCardPress(title)
            }}
            style={styles.wrap}
        >
            <Text style={{ color: colors.text }}>{title}</Text>
            <TouchableOpacity
                onPress={() => onPress(title)}
                style={styles.icon}
            >
                <CardIcon name={'star'} checked={isChecked} />
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default Card
