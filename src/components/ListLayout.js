import React from 'react';
import {StyleSheet, Text, FlatList, TouchableOpacity, Image} from "react-native";
import layout from "../constants/Layout";
import colors from "../constants/Colors";

export const ListLayout = ({navigation, data, onTaskPressed}) => {
    return (
        <FlatList
            style={{paddingTop: layout.height * 0.15,}}
            data={data}
            pagingEnabled={true}
            showsVerticalScrollIndicator={false}
            keyExtractor={actor => actor.name}
            renderItem={({item}) => {
                return (

                    <TouchableOpacity
                        onPress={() => onTaskPressed(item)}
                        style={styles.container}
                        activeOpacity={layout.ACTIVE_OPACITY}>

                        <Image
                            resizeMode='cover'
                            source={{uri: `https://image.tmdb.org/t/p/w500${item.profile_path}`}}
                            style={styles.actorAvatar}/>
                        <Text style={styles.actorName}>{item.name}</Text>

                    </TouchableOpacity>
                )
            }}
        />
    )
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 15,
        marginHorizontal: 20,
        flexDirection: 'row'
    },
    actorAvatar: {
        width: 70,
        height: 70,
        borderRadius: 100
    },
    actorName: {
        ...layout.BASIC_TEXT_BOLD,
        fontSize: 20,
        color: colors.BLACK,
        alignSelf:'center',
        marginStart: 20,
    },
});