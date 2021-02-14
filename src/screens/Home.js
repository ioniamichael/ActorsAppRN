import React, {useState} from 'react';
import {StyleSheet, View} from "react-native";
import {GridLayout} from "../components/GridLayout";
import {SearchComponent} from '../components/SearchComponent';
import {fetchActors} from "../redux/actions/actorActions";
import {useDispatch, useSelector} from "react-redux";
import {ACTOR_PROFILE} from "../constants/Strings";
import layout from '../constants/Layout';
import {ShowAs} from "../components/ShowAs";
import {ListLayout} from "../components/ListLayout";

export const Home = ({navigation}) => {

    const actors = useSelector(state => state.actor.allActors);
    const isListLayout = useSelector(state => state.actor.isListLayout);
    const actorsWithImageOnly = actors.filter(actor => actor.profile_path != null);
    const dispatch = useDispatch();
    const [term, setTerm] = useState('');

    const fetchEntryActors = async (term) => {
        if (term.length > 2) {
            try {
                await dispatch(fetchActors(term));
            } catch (e) {
                alert(e);
            }
        }
    };

    const openActorProfileScreenHandler = (actor) => {
        navigation.navigate(ACTOR_PROFILE, {actor});
    };

    const renderLayout = () => {
        if (isListLayout) {
            return (
                <ListLayout data={actorsWithImageOnly} onTaskPressed={openActorProfileScreenHandler}/>
            )
        } else {
            return (
                <GridLayout data={actorsWithImageOnly} onTaskPressed={openActorProfileScreenHandler}/>
            )
        }
    };

    return (
        <View style={styles.container}>
            {renderLayout()}
            <View style={styles.searchContainer}>
                <SearchComponent
                    onTermChange={(term) => {
                        setTerm(term);
                        fetchEntryActors(term)
                    }}
                    term={term}/>
                <ShowAs/>
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
        flexDirection: 'row',
        position: 'absolute',
        paddingHorizontal: 20,
        width: layout.width,
        height: layout.height * 0.3,
    },

})
