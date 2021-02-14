import React from "react";
import {StyleSheet, View, Text, TextInput, SafeAreaView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import layout from '../constants/Layout';
import colors from '../constants/Colors';

export const SearchComponent = ({term, onTermChange}) => {



    return(
        <SafeAreaView style={styles.container}>
            <Ionicons style={styles.iconStyle} name={'search-outline'} size={24} color={'black'} />
            <TextInput
                style={styles.textInput}
                placeholder='Actor name?'
                value={term}
                onChangeText={(term) => new onTermChange(term)}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        borderRadius: 100,
        backgroundColor: colors.SEARCH_BACKGROUND,
        width: layout.width * 0.70,
        height: layout.height * 0.06,
        top: layout.height * 0.05,
        borderWidth: 1,
    },
    iconStyle:{
        marginHorizontal: 20,
        alignSelf: 'center'
    },
    textInput:{
        flex:1,
        marginEnd: 20,
    }
})
