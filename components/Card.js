import React, { Component } from 'react';
import { Text, View } from "react-native";
import styles from './styles.scss'

const Card = ({ title }) => (
    <View style={styles.wrap}>
        <Text style={styles.text}>{title}</Text>
    </View>
);

export default Card
