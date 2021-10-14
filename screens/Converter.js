import styles from '../styles/index.scss'
import React from 'react';
import {Text, TextInput, View} from 'react-native';

import {connect} from 'react-redux';


import { selectFavorite } from '../actions/currencies';

import Card from "../components/Card";


const Convertation = (props) => {
    const { baseCurrency, dispatch } = props

    const handlePress = (currency) => {
        dispatch(selectFavorite(currency))
    };


    return (
        <View style={styles.wrap}>
           <Text>EU</Text>
            <View>
                <View>
                    <Text>{baseCurrency}</Text>
                    <TextInput />
                </View>
                <View>
                    <Text>USD</Text>
                    <TextInput />
                </View>
            </View>
        </View>
    );
}


const mapStateToProps = state => ({
    baseCurrency: state.baseCurrency
});

export default connect(mapStateToProps)(Convertation);
