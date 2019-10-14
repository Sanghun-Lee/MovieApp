//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// map의 사용
// 배열에서 map은 각 인자들에 대해서 함수를 실행시키고, 그 리턴된 값을 다시 배열에 넣어준다.
const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    price: 23,
    image: 'https://www.lge.co.kr/uploads/product/media/2018/09/k228lw13e.akor/usp_0101_m.jpg',
  },
  {
    id: 2,
    name: 'bread',
    price: 1000,
    image: 'https://i.ytimg.com/vi/yBfyrLzstPQ/maxresdefault.jpg',
  },
  {
    id: 3,
    name: 'bigmac',
    price: 5500,
    image: 'https://d1nqx6es26drid.cloudfront.net/app/uploads/2018/09/31094250/BigMac.png',
  },
];
// create a component
class Map extends Component {
  render () {
    return (
      <View style={styles.container}>
        {foodILike.map (dish => (
          <Food key={dish.id} name={dish.name} picture={dish.image} />
        ))}
      </View>
    );
  }
}

function Food({name, picture}) {
  return (
    <View style={{flex: 1}}>
      {/* 아래와 같이 props로 받은 컴포넌트중 원하는 것을 사용할 수 있다. */}
      <Text>{name}</Text>
      <Image source={{uri: picture}} style={{width: 100, height: 100}} />
    </View>
  );
}

// define your styles
const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default Map;
