import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { BigSwimLane } from "../components/BigSwimLane";
import { SearchComponent } from '../components/SearchComponent';
import {fetchActors} from "../redux/actions/actorActions";
import layout from '../constants/Layout'

export const Home = ({ }) => {

    const actors = useSelector(state => state.actor.allActors);
    const actorsWithImageOnly = actors.filter(actor => actor.profile_path != null)
    const dispatch = useDispatch();
    const [term, setTerm] = useState('');

    const fetchEntryActors = async () => {
        if (term) {
            try {
                console.log('::TRY');
                await dispatch(fetchActors(term));
            } catch (e) {
                console.log(e);
            }
        }
    };


    return (
        <View style={styles.container}>
            <BigSwimLane data={actorsWithImageOnly} />
            <SearchComponent onTermChange={() => {
                setTerm
                fetchEntryActors()
            }} term={term} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    text: {
        ...layout.BASIC_TEXT_BOLD
    }
})
