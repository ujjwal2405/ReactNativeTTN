import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

class Home1 extends React.Component{
    constructor(props){
        super(props);
        this.state={text:'',passtext:''};
    }
  onChangeText(text){
   
  }
 render(){
     return(
         <View style={styles.container}>
            <Text>Username</Text>
            <TextInput
            style={{
                height: 50,
                width: '90%',
                borderColor: 'blue',
                borderWidth: 1,
              }}

              onChangeText={text=>this.setState({text})}
            />
            <Text>{this.state.text}</Text>
            
            <Text>Password</Text>
            
            <TextInput 
            style={{
                height: 50,
                width: '90%',
                borderColor: 'blue',
                borderWidth: 1,
              }}
              onChangeText={passtext=>this.setState({passtext})}
            
            />
            <Text>{this.state.passtext}</Text>
         
         
         </View>
     )
 }  
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Home1