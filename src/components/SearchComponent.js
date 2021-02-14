import React from "react";
import {StyleSheet, View, Text, TextInput, SafeAreaView} from 'react-native';
import layout from '../constants/Layout';
import colors from '../constants/Colors';

export const SearchComponent = ({term, onTermChange}) => {
    return(
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder='Actor name?'
                value={term}
                onChangeText={onTermChange}
                
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        backgroundColor: colors.SEARCH_BACKGROUND,
        width: layout.width - 40,
        height: layout.height * 0.06,
        top: layout.height *0.05,
        borderWidth: 2,
        marginHorizontal: 20,
    }
})