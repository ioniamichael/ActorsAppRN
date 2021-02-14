import React from 'react'
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {Splash} from "../screens/Splash";
import {HomeNavigator} from '../navigation/HomeNavigator';

const AppNavigator = createSwitchNavigator({
    Splash,
    HomeNavigator
})

export default createAppContainer(AppNavigator)
