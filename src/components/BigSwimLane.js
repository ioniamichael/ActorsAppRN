import React from "react";
import {StyleSheet, Image, TouchableOpacity, FlatList, Text, ImageBackground} from "react-native";
import layout from '../constants/Layout';
import colors from "../constants/Colors";

export const BigSwimLane = ({navigation, data, onTaskPressed}) => {

    return (

        <FlatList
            data={data}
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={actor => actor.name}
            renderItem={({item}) => {
                return (

                    <TouchableOpacity
                        onPress={() => onTaskPressed(item)}
                        style={styles.container}
                        activeOpacity={layout.ACTIVE_OPACITY}>

                        <ImageBackground
                            resizeMode='cover'
                            source={{uri: `https://image.tmdb.org/t/p/w500${item.profile_path}`}}
                            style={styles.background}>
                            <Text style={styles.actorName}>{item.name}</Text>
                        </ImageBackground>

                    </TouchableOpacity>
                )
            }}
        />
    )
}

const styles = StyleSheet.create({
    container: {},
    background: {
        width: layout.width,
        height: '100%'
    },
    actorName: {
        ...layout.BASIC_TEXT_BOLD,
        color: colors.WHITE,
        fontSize: 26,
        marginHorizontal: 20,
        top: layout.height * 0.93
    }
})
