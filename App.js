import * as React from 'react'
import store from './config/store'
import { Provider } from 'react-redux'
import { Provider as PaperProvider } from 'react-native-paper'

import MainStackNavigator from './config/navigation/StackNavigator'
import {PermissionsAndroid} from "react-native";
import {useEffect} from "react";

export default function App() {
     useEffect(() => {
         requestExternalStoreageWrite()
         requestExternalStoreageRead()
     }, [])

    const requestExternalStoreageRead = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    'title': 'PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE',
                    buttonPositive: "OK"
                }
            );

            return granted === PermissionsAndroid.RESULTS.GRANTED
        } catch (err) {
            return false;
        }
    }


    const requestExternalStoreageWrite = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    'title': 'PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,',
                     buttonPositive: "OK"
                }
            );

            return granted === PermissionsAndroid.RESULTS.GRANTED
        } catch (err) {
            return false;
        }
    }

    return (
        <Provider store={store}>
            <PaperProvider>
                <MainStackNavigator />
            </PaperProvider>
        </Provider>
    )
}
