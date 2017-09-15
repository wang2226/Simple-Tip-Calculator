import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Number, StyleSheet, Slider, Image } from 'react-native';

export default class TipCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {bill: '', percentage: 20, numP: 1};
  }

  render() {
    return (

    <Image source={require('./img.png')}
           style = {styles.backgroundImage}
    >

      <View style={{padding: 20}}>

        <Text style={styles.title}>
          Tip Calculator
          {'\n'}
        </Text>

        <Text style={styles.body}>
          Bill:
        </Text>

        <TextInput
          style={styles.body}
          placeholder="Enter your bill here"
          keyboardType = {'numeric'}
          returnKeyType = {'done'}
          onChangeText={bill => this.setState({bill})}
        />

        <Text style={styles.body}>
          {'\n'}
          Percentage for tips:
        </Text>

        <Slider
          ref='slider'
          style={styles.slider}
          step={1}
          minimumValue={5}
          maximumValue={30}
          value={this.state.percentage}
          onValueChange={percentage => this.setState({percentage: percentage})}
        />

        <Text style={styles.body}>
          {this.state.percentage} %
          {"\n"}
        </Text>

        <Text style={styles.body}>
          Number of people to split:
        </Text>

        <Slider
          ref='slider'
          style={styles.slider}
          step={1}
          minimumValue={1}
          maximumValue={10}
          value={this.state.numP}
          onValueChange={numP => this.setState({numP: numP})}
        />

        <Text style={styles.body}>
          {this.state.numP} people
          {"\n"}
        </Text>

        <Text style={styles.body}>
          Tips: $ {(this.state.bill * this.state.percentage / 100 / this.state.numP).toFixed(2)}
        </Text>

      </View>

    </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },

  title: {
    fontFamily: 'ChalkboardSE-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
    color: 'darkturquoise',
    backgroundColor: 'transparent',
  },
  body: {
    fontFamily: 'ChalkboardSE-Bold',
    textAlign: 'left',
    fontSize: 25,
    color: 'greenyellow',
    backgroundColor: 'transparent',
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => TipCalculator);
