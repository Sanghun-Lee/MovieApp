//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

// create a component
// axios
// npm install axios
class Axios extends Component {
  state = {
    isLoading: false,
    movies: [],
  };

  // 데이터를 가져오는데 시간이 걸리기 때문에 async, await함수를 사용하였다.
  getMovies = async () => {
    // fetch대신에 axios로 데이터를 가져올 수 있다.
    // const movies = await axios.get ('https://yts.lt/api/v2/list_movies.json');
    // console.log (movies.data.data.movies);
    // 가져온 데이터의 data.data.movies 에 우리가 원하는 영화 목록이 들어가 있다.

    /* ES6에서는 위 코드와 아래 코드가 같은 역할을 한다. */
    const {data: {data: {movies}}} = await axios.get (
      'https://yts.lt/api/v2/list_movies.json'
    );
    // console.log (movies);

    // movies : movies를 movies로 줄여 쓸 수 있다.
    this.setState ({movies, isLoading: true});
  };

  componentDidMount () {
    this.getMovies ();
  }

  render () {
    return (
      <View style={styles.container}>
        {this.state.isLoading ? this._complete () : <Text>Loading</Text>}
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
export default Axios;
