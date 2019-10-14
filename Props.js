//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
// props : property의 약자
class Props extends Component {
  render () {
    return (
      <View style={styles.container}>
        {/* 아래와 같이 key, value들을 적어서 다른 함수로 데이터를 보낼 수 있다. */}
        <Food fav="kimchi" something={true} arr={['Hello', 1, 2, 3, 4, true]} />
        <ES6_Food
          fav="kimchi"
          something={true}
          arr={['Hello', 1, 2, 3, 4, true]}
        />
      </View>
    );
  }
  Compo;
}

// props라고 적으면 Food를 호출 할 때의 인자들이 다 props로 들어간다.
function Food (props) {
  console.log (props);
  return (
    <View>
      <Text>Food is Called</Text>
      {/* 아래와 같이 props로 받은 컴포넌트중 원하는 것을 사용할 수 있다. */}
      <Text>{props.fav}</Text>
    </View>
  );
}

// es6에서는 props로 받은 데이터 중에 원하는 값만 가져올 수 있다.
// 이름 또한 같아야 한다.
function ES6_Food({fav}) {
  // key가 fav인 것만 가져온다
  console.log ('ES6 - ' + fav);
  return (
    <View>
      <Text>Food is Called</Text>
      {/* 아래와 같이 props로 받은 컴포넌트중 원하는 것을 사용할 수 있다. */}
      <Text>{fav}</Text>
    </View>
  );
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
export default Props;
