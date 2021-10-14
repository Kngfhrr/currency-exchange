import * as React from 'react'

import { useTheme } from '@react-navigation/native'
import MyCurrencies from '../../screens/MyCurrencies'
import AllCurrencies from '../../screens/AllCurrencies'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator()

function MyTabs() {
    const { colors } = useTheme()
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveTintColor: colors.text,
                tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
                tabBarStyle: { backgroundColor: colors.primary },
            }}
        >
            <Tab.Screen
                name="AllCurrencies"
                component={AllCurrencies}
                options={{ tabBarLabel: 'All Currencies' }}
            />
            <Tab.Screen
                name="MyCurrencies"
                component={MyCurrencies}
                options={{ tabBarLabel: 'My Currencies' }}
            />
        </Tab.Navigator>
    )
}

export default MyTabs
