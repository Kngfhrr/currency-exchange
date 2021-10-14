import * as React from 'react'
import store from './config/store'
import { Provider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'

import MainStackNavigator from './config/navigation/StackNavigator'

export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider>
                <MainStackNavigator />
            </PaperProvider>
        </Provider>
    )
}
