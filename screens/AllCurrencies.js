import styles from '../styles/index.scss'
import React, { useEffect, useState } from 'react'
import { View, FlatList, Text } from 'react-native'

import { connect } from 'react-redux'

import { getCurrencies, selectFavorite } from '../actions/currencies'

import Card from '../components/Card'
import { TextInput, Switch } from 'react-native-paper'
import { changeTheme } from '../actions/theme'
import { useTheme } from '@react-navigation/native'

const AllCurrencies = (props) => {
    const { colors } = useTheme()

    const { data, dispatch, favorites, dark } = props
    const currencies = data && Object.keys(data)

    const [items, setItems] = useState([])

    useEffect(() => {
        dispatch(getCurrencies())
    }, [])

    useEffect(() => {
        setItems(currencies)
    }, [data])

    const onSearch = (val) => {
        if (!val) return setItems(currencies)
        const find = currencies.filter(
            (item) => item.toLowerCase() === val.toLowerCase()
        )
        setItems(find)
    }

    const handlePress = (currency) => {
        dispatch(selectFavorite(currency))
    }

    return (
        <View style={styles.wrap}>
            <View style={styles.switcher}>
                <Text style={{ color: colors.text }}>Dark Mode</Text>
                <Switch
                    value={dark}
                    onValueChange={() => dispatch(changeTheme(!dark))}
                />
            </View>
            <TextInput
                mode={'outlined'}
                onChangeText={(e) => onSearch(e)}
                style={{...styles.search}}
                placeholder="Enter currency name"
            />
            <FlatList
                data={items}
                renderItem={({ item }) => (
                    <Card
                        disabled
                        isChecked={!favorites?.includes(item)}
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
    data: state.reducerCurrencies.currencies,
    favorites: state.reducerCurrencies.favorites,
    dark: state.reducerTheme.dark,
})

export default connect(mapStateToProps)(AllCurrencies)
