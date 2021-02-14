import {createStackNavigator, TransitionPresets} from "react-navigation-stack";
import {Home} from '../screens/Home';
import {ActorProfile} from '../screens/ActorProfile';

export const HomeNavigator = createStackNavigator({
        Home,
        ActorProfile,
    },
    {
        headerMode: 'none',
        defaultNavigationOptions: {
            ...TransitionPresets.FadeFromBottomAndroid
        }
    });