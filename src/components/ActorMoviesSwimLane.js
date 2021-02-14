import React from 'react';
import {StyleSheet, View, Text, FlatList, ImageBackground} from "react-native";
import layout from '../constants/Layout';
import colors from '../constants/Colors';
import {ACTOR_PROFILE_SCREEN_TITLE} from '../constants/Strings';

export const ActorMoviesSwimLane = ({moviesArray}) => {

    return (

        <View style={styles.container}>

            <Text style={styles.title}>{ACTOR_PROFILE_SCREEN_TITLE}</Text>

            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal
                data={moviesArray}
                keyExtractor={movie => movie.id.toString()}
                renderItem={({item}) => {
                    return (
                        <ImageBackground
                            resizeMode='cover'
                            source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}}
                            style={styles.background}>
                        </ImageBackground>
                    )
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        marginVertical:20,
        ...layout.BASIC_TEXT_BOLD,
        color: colors.WHITE,
    },
    container: {
        marginVertical:20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        marginEnd: 10,
        marginStart:10,
        overflow: 'hidden',
        elevation: 5,
        borderRadius: 10,
        width: layout.width * 0.4,
    },
});