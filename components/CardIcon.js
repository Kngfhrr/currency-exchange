import React from 'react';
import {Image, TouchableOpacity, View} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLOR_PALETTE} from "./colors";

const CustomIcon = ({name, checked, style}) => {
    return (
        <View style={{style}}>
            <TouchableOpacity>
                <Icon name={name} size={25} color={!checked ? COLOR_PALETTE.secondary : COLOR_PALETTE.disabled} />
            </TouchableOpacity>
        </View>

    )}
export default CustomIcon
