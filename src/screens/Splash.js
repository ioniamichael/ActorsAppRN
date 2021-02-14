import React, {useEffect} from 'react'
import {StyleSheet, View, Text} from "react-native";
import {useDispatch} from "react-redux";
import {fetchActors} from "../redux/actions/actorActions";

export const Splash = ({navigation}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        fetchEntryActors();
    }, [])


    const fetchEntryActors = async () => {
        try {
            await dispatch(fetchActors('Bred'));
            navigation.navigate('Home')

        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View style={styles.container}>
            <Text>Splash screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
