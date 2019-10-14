//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// create a component
// state는 object이다.
// 컴포넌트의 데이터를 바꾸기 위해서 클래스 컴포넌트로 바꾸고, state를 선언한다.
class State extends Component {
  state = {
    count: 0,
  };
  render () {
    return (
      <View style={styles.container}>
        <Text>{this.state.count}</Text>
        {/* this.press() 라고 호출을 하면 즉시 실행된다. 즉, 눌렀을 때 실행하는게 아니라 즉시 실행된다. */}
        {/* () : 즉시라는 뜻이다. */}
        <TouchableOpacity onPress={this.press} />
        <TouchableOpacity onPress={this.add}><Text>Add</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.minus}>
          <Text>Minus</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.reset}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  }
  press = () => {
    alert ('pressed');
  };
  // state는 절대 함수에서 바로 수정하지 못한다.
  add = () => {
    // this.state.count = 1; // 이렇게 하면 안된다. (바로 수정하면 안된다.)
    // setState함수로 state객체에 저장할 새 객체를 괄호안에 넣어야 한다.
    this.setState (prevState => ({count: prevState.count + 1}));
  };
  minus = () => {
    this.setState (function aa (current) {
      return {count: current.count - 1};
    });
    // this.setState(current : this.state.current + 1);
  };
  reset = () => {
    // setState를 호출할 때 마다 react는 render함수를 다시 호출한다.
    this.setState ({count: 0});
  };
}

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default State;
