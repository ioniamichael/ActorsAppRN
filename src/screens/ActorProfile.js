import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, ImageBackground} from "react-native";
import layout from "../constants/Layout";
import colors from '../constants/Colors';
import {POPULARITY, ROLE} from "../constants/Strings";
import {ActorMoviesSwimLane} from "../components/ActorMoviesSwimLane";


export const ActorProfile = ({navigation}) => {

    const actor = navigation.getParam('actor');
    const actorProfileImage = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <ImageBackground
            resizeMode='cover'
            source={{uri: actorProfileImage}}
            style={styles.background}
            blurRadius={10}>

            <ScrollView style={styles.container}>

                <View style={styles.topContainer}>
                    <Image style={styles.actorAvatar} source={{uri: actorProfileImage}}/>
                    <Text style={styles.actorName}>{actor.name}</Text>
                    <Text style={styles.actorDetailsText}>{POPULARITY}{actor.popularity}</Text>
                    <Text style={styles.actorDetailsText}>{ROLE}{actor.known_for_department}</Text>
                </View>

                <View style={styles.bottomContainer}>
                    <ActorMoviesSwimLane moviesArray={actor.known_for}/>
                </View>

            </ScrollView>

        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    background: {
        width: layout.width,
        height: '100%'
    },
    container: {},
    topContainer: {
        height: layout.height * 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    actorAvatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    actorDetailsContainer: {
        margin: 10,
    },
    actorName: {
        ...layout.BASIC_TEXT_BOLD,
        fontSize: 20,
        color: colors.WHITE
    },
    actorDetailsText: {
        ...layout.BASIC_TEXT_REGULAR,
        color: colors.WHITE,
    },
    bottomContainer:{
        height: layout.height * 0.5,
        alignItems: 'center',
        justifyContent: 'center'
    }
});