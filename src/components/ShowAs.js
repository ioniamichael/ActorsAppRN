import React from 'react';
import {StyleSheet,TouchableOpacity} from "react-native";
import {changeHomeScreenLayout} from "../redux/actions/actorActions";
import {useDispatch, useSelector} from "react-redux";
import Ionicons from 'react-native-vector-icons/Ionicons';
import layout from "../constants/Layout";
import colors from '../constants/Colors';

export const ShowAs = ({}) => {

    const dispatch = useDispatch();
    const isListLayout = useSelector(state => state.actor.isListLayout);

    return(
        <TouchableOpacity
            activeOpacity={layout.ACTIVE_OPACITY}
            onPress={() => {
                dispatch(changeHomeScreenLayout(!isListLayout))
            }}
            style={styles.container}>
            <Ionicons name={isListLayout ? 'grid-outline' : 'list-outline'} size={30}/>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container:{
        marginStart: layout.width * 0.05,
        borderWidth: 1,
        backgroundColor: colors.SEARCH_BACKGROUND,
        borderRadius: 40,
        alignItems:'center',
        justifyContent: 'center',
        width: layout.width * 0.15,
        height: layout.height * 0.06,
        top: layout.height * 0.05,
    }
});

