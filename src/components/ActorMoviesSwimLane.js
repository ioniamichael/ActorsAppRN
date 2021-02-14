import React from 'react';
import {StyleSheet, View, Text, FlatList, ImageBackground} from "react-native";
import layout from '../constants/Layout'
import colors from '../constants/Colors'

export const ActorMoviesSwimLane = ({moviesArray}) => {

    return (

        <View style={styles.moviesList}>

            <Text style={styles.title}>Played in Moves and shows: </Text>

            <FlatList
                pagingEnabled={true}
                horizontal
                data={moviesArray}
                keyExtractor={movie => movie.id.toString()}
                renderItem={({item}) => {
                    return (

                        <ImageBackground
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
        ...layout.BASIC_TEXT_BOLD,
        color: colors.WHITE,
    },
    moviesList: {
        height: layout.height * 0.7,
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        width: layout.width -50,
        margin: 10,
        height: layout.height * 0.6
    }
})