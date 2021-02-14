import React, {useEffect} from 'react'
import {StyleSheet, ImageBackground, ActivityIndicator, Text} from "react-native";
import {fetchActors} from "../redux/actions/actorActions";
import {useDispatch} from "react-redux";
import {HOME} from "../constants/Strings";
import {BACKGROUND} from '../constants/Assets';
import colors from '../constants/Colors';
import layout from '../constants/Layout';


export const Splash = ({navigation}) => {

    const dispatch = useDispatch();

    const fetchEntryScreenActors = async () => {
        try {
            await dispatch(fetchActors('Kob'));
            setTimeout(() => {
                navigation.navigate(HOME);
            }, 2000);
        } catch (e) {
            alert(e);
        }
    };

    useEffect(() => {
        fetchEntryScreenActors();
    }, [dispatch]);

    return (
        <ImageBackground
            style={styles.container}
            source={BACKGROUND}
            blurRadius={40}>

            <Text style={styles.logo}>Find Actor</Text>

            <ActivityIndicator size={'large'} color={colors.WHITE}/>

        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        marginTop: layout.height * 0.1,
        position: 'absolute',
        top: 0,
        ...layout.BASIC_TEXT_BOLD,
        fontSize: 24,
        color: colors.WHITE
    }
});
