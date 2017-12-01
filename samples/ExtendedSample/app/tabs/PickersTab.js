import React, { Component } from 'react';

import {
  Text,
  View
} from 'react-native';

export default class PickersTab extends Component {
  
  static navigationOptions = {
    title: 'Pickers',
    tabBarOnPress: (event) => {
      event.jumpToIndex(event.scene.index);
    }
  };
  
  render() {
    return (
      <View>
        <Text>Pickers here</Text>
      </View>
    );
  }
}
