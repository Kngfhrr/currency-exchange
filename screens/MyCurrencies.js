import styles from '../styles/index.scss'

import React from 'react'
import { connect } from 'react-redux'

import { View, FlatList } from 'react-native'
import { selectFavorite, selectQuoteCurrency } from '../actions/currencies'

import Card from '../components/Card'

const MyCurrencies = (props) => {
    const { favorites, dispatch, navigation } = props

    const handlePress = (currency) => {
        dispatch(selectFavorite(currency))
    }

    const handleCardPress = (currency) => {
        dispatch(selectQuoteCurrency(currency))
        navigation.navigate('Converter')
    }

    return (
        <View style={styles.wrap}>
            <FlatList
                data={favorites}
                renderItem={({ item }) => (
                    <Card
                        handleCardPress={handleCardPress}
                        onPress={handlePress}
                        title={item}
                    />
                )}
                keyExtractor={(item) => item}
            />
        </View>
    )
}

const mapStateToProps = (state) => ({
    favorites: state.reducerCurrencies.favorites,
})

export default connect(mapStateToProps)(MyCurrencies)
