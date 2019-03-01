import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthScreen from '../screens/AuthScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import MapScreen from '../screens/MapScreen';
import DeckScreen from '../screens/DeckScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ReviewScreen from '../screens/ReviewScreen';
import {
    createAppContainer,
    createBottomTabNavigator,
    createStackNavigator
} from 'react-navigation';

const MainNavigator = createBottomTabNavigator({
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
    main: {
        screen: createBottomTabNavigator({
            map: { screen: MapScreen },
            deck: { screen: DeckScreen },
            review: {
                screen: createStackNavigator({
                    review: { screen: ReviewScreen },
                    settings: { screen: SettingsScreen }
                })
            }
        })
    }
});

const AppContainer = createAppContainer(MainNavigator);

class AppNavigation extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <AppContainer screenProps={this.props} />
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);