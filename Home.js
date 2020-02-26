import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Username'
    };
    console.warn('Hello I am Constructor');
  }
  onChangeText(text) {
    console.warn(text);
  }
  render() {
    const {text} = this.state;
    return (
      <View style={styles.container}>
        <Text>{text}</Text>
        <TextInput
          
          style={{
            height: 50,
            width: '90%',
            borderColor: 'red',
            borderWidth: 1,
          }}
          onChangeText={text => this.onChangeText(text)}
        />
      </View>
    );
  }
  componentDidMount() {
    console.warn('Hello I am ComponentDidMount');
    setTimeout(() => {
      this.setState({
        editable: false,
      });
    }, 4000);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;