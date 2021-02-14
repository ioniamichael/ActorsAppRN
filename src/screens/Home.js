import React, {useState} from 'react';
import {StyleSheet, View} from "react-native";
import {BigSwimLane} from "../components/BigSwimLane";
import {SearchComponent} from '../components/SearchComponent';
import {fetchActors} from "../redux/actions/actorActions";
import {useDispatch, useSelector} from "react-redux";
import {ACTOR_PROFILE} from "../constants/Strings";
import layout from '../constants/Layout';

export const Home = ({navigation}) => {

    const actors = useSelector(state => state.actor.allActors);
    const actorsWithImageOnly = actors.filter(actor => actor.profile_path != null);
    const dispatch = useDispatch();
    const [term, setTerm] = useState('');

    const fetchEntryActors = async (term) => {
        if (term.length > 2) {
            try {
                await dispatch(fetchActors(term));
            } catch (e) {

            }
        }
    };

    const openActorProfileScreenHandler = (actor) => {
        navigation.navigate(ACTOR_PROFILE, {actor});

    };

    return (
        <View style={styles.container}>
            <BigSwimLane data={actorsWithImageOnly} onTaskPressed={openActorProfileScreenHandler}/>

            <View style={styles.searchContainer}>
                <SearchComponent
                    onTermChange={(term) => {
                        setTerm(term);
                        fetchEntryActors(term)
                    }}
                    term={term}/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    text: {
        ...layout.BASIC_TEXT_BOLD
    },
    searchContainer: {
        position: 'absolute',
        paddingHorizontal: 20,
        width: layout.width,
        height: layout.height * 0.3,
    },

})
