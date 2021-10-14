import React from 'react'
import { connect } from 'react-redux'
import { StatusBar } from 'react-native'
import Converter from '../../screens/Converter'
import { NavigationContainer, useTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { DarkTheme, LightTheme } from '../../helpers/themes'

import MyTabs from './Tabs'

const Stack = createNativeStackNavigator()

const MainStackNavigator = (props) => {
    const { colors } = useTheme()

    return (
        <NavigationContainer theme={props.dark ? DarkTheme : LightTheme}>
            <StatusBar />
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={MyTabs}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    options={{
                        headerStyle: {
                            backgroundColor: colors.primary,
                        },
                    }}
                    name="Converter"
                    component={Converter}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = (state) => ({
    dark: state.reducerTheme.dark,
})

export default connect(mapStateToProps)(MainStackNavigator)
