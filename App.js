import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, Number, StyleSheet, Slider } from 'react-native';

export default class TipCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {bill: '', percentage: 20, numP: 1};
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'lightskyblue', padding: 30}}>
        <Text style={styles.title}>
          Tip Calculator
        </Text>

        <Text>{"\n"}</Text>

        <Text style={styles.body}>
          Bill:
        </Text>

        <TextInput
          style={styles.body}
          placeholder="Enter your bill here!"
          onChangeText={bill => this.setState({bill})}
        />

        <Text>{"\n"}</Text>

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
          Percentage: {this.state.percentage}%
        </Text>

        <Text>{"\n"}</Text>

        <Text style={styles.body}>
          Number of people to split:
        </Text>

        <TextInput
          style={styles.body}
          placeholder="1"
          onChangeText={numP => this.setState({numP})}
        />

        <Text>{"\n"}</Text>

        <Text style={styles.title}>
          Tip: $ {(this.state.bill * this.state.percentage / 100 / this.state.numP).toFixed(2)}
        </Text>

        <Text>{"\n"}</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'ChalkboardSE-Bold',
    fontWeight: 'bold',
    alignItems: 'center',
    fontSize: 30,
    color: 'violet',
  },
  body: {
    fontFamily: 'ChalkboardSE-Bold',
    alignItems: 'center',
    fontSize: 25,
    color: 'springgreen',
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => TipCalculator);
