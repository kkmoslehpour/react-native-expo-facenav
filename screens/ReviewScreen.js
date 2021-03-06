import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Review Jobs',
            headerRight: (
                <Button
                    title='Settings'
                    onPress={() => navigation.navigate('settings')} 
                    backgroundColor="rgba(0,0,0,0)"
                    color="rgba(0, 122, 255, 1)"
                />
            )
        };
    };

    render() {
        return (
            <View>
                <Text>ReviewScreen Placeholder</Text>
            </View>
        )
    }
}

export default ReviewScreen;