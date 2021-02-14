import React from 'react';
import {StyleSheet, View, Text, Image, ScrollView, ImageBackground} from "react-native";
import layout from "../constants/Layout";
import colors from '../constants/Colors';
import {POPULARITY, ROLE} from "../constants/Strings";
import {ActorMoviesSwimLane} from "../components/ActorMoviesSwimLane";


export const ActorProfile = ({navigation}) => {

    const actor = navigation.getParam('actor');
    const actorProfileImage = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    console.log(actor)

    return (
        <ImageBackground
            resizeMode='cover'
            source={{uri: actorProfileImage}}
            style={styles.background}
            blurRadius={10}>

            <ScrollView style={styles.container}>

                <View style={styles.topContainer}>
                    <Image style={styles.actorAvatar} source={{uri: actorProfileImage}}/>
                    <View style={styles.actorDetailsContainer}>
                        <Text style={styles.actorName}>{actor.name}</Text>
                        <Text style={styles.actorDetailsText}>{POPULARITY}{actor.popularity}</Text>
                        <Text style={styles.actorDetailsText}>{ROLE}{actor.known_for_department}</Text>
                    </View>
                </View>

                <ActorMoviesSwimLane moviesArray={actor.known_for}/>

            </ScrollView>

        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    background: {
        width: layout.width,
        height: '100%'
    },
    container:{
      paddingVertical: layout.height * 0.05,

    },
    topContainer:{
        marginHorizontal:20,
      flexDirection: 'row',
        height: layout.height * 0.3,
        alignItems: 'center',
    },
    actorAvatar: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    actorDetailsContainer:{
      marginHorizontal: 20,
    },
    actorName:{
        marginBottom: 10,
        ...layout.BASIC_TEXT_BOLD,
        fontSize: 20,
        color: colors.WHITE
    },
    actorDetailsText:{
        ...layout.BASIC_TEXT_REGULAR,
        color: colors.WHITE,
    }
})