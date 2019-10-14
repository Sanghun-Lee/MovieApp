//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
class Fetch extends Component {
  state = {
    loading: false,
    movies: [],
  };

  // fetch를 이용해서 데이터를 가져온다.
  // 가져온 데이터를 log하면 promise가 뜬다.
  async componentDidMount () {
    // fetch의 결과물을 then에게 response라는 이름으로 넘겨준다.
    // Response로는 통신이 잘 되었는지에 대해서 나온다.
    await fetch (`https://yts.lt/api/v2/list_movies.json?sort_by=rating`)
      .then (response => response.json ()) // fetch한 다음 then실행 response를 받아서 json으로 변환 후 return한다.
      .then (json =>
        this.setState ({
          movies: json.data.movies,
          loading: true,
        })
      ) // 위 then문장이 끝나면 지금 then문장 실행
      .catch (err => console.log (err)); // 에러가 일어나면 catch실행
    // then이 너무 많아지면 CALLBACK HELL이 된다. 그러니 조심하자
  }
  render () {
    return (
      <View style={styles.container}>
        {this.state.loading ? this._complete () : <Text>Loading</Text>}
      </View>
    );
  }

  _complete = () => (console.log (this.state.movies), <Text>Complete</Text>);
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
export default Fetch;
