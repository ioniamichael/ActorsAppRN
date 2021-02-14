import React from 'react';
import {StyleSheet, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {Provider} from "react-redux";
import store from './src/redux'
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <StatusBar style='light'/>
                <AppNavigator/>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
