import styles from '../styles/index.scss'
import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import { connect } from 'react-redux'

import { TextInput } from 'react-native-paper'
import { getCurrencyConversion } from '../actions/currencies'
import { useTheme } from '@react-navigation/native'

const Converter = (props) => {
    const { colors } = useTheme()

    const { baseCurrency, dispatch, quoteCurrency, amount, result } = props

    const [params, setParams] = useState({
        baseCurrency,
        quoteCurrency,
        amount,
    })

    useEffect(() => {
        getConversion()
    }, [])

    const getConversion = () => {
        dispatch(getCurrencyConversion(params))
    }

    return (
        <View style={styles.wrap}>
            <Text style={{ color: colors.text, ...styles.header }}>
                {baseCurrency}
            </Text>
            <View>
                <View>
                    <TextInput
                        keyboardType="numeric"
                        onEndEditing={() => {
                            params.amount && getConversion()
                        }}
                        onChangeText={(e) =>
                            setParams({ ...params, amount: e })
                        }
                        value={params.amount.toString()}
                        // mode={'outli'}
                        style={styles.input}
                        label={baseCurrency}
                    />
                    <TextInput
                        value={result.toString() || ''}
                        // mode={'outlined'}
                        style={styles.input}
                        label={quoteCurrency}
                    />
                </View>
            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({
    baseCurrency: state.reducerCurrencies.baseCurrency,
    quoteCurrency: state.reducerCurrencies.quoteCurrency,
    amount: state.reducerCurrencies.amount,
    result: state.reducerCurrencies.result,
})

export default connect(mapStateToProps)(Converter)
