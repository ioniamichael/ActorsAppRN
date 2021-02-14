import React from 'react'
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {Splash} from "../screens/Splash";
import {Home} from "../screens/Home";

const AppNavigator = createSwitchNavigator({
    Splash,
    Home,
})

export default createAppContainer(AppNavigator)
