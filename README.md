# 리액트

> 참고 강의<br> > https://www.youtube.com/playlist?list=PL7jH19IHhOLPp990qs8MbSsUlzKcTKuCf

## 1. Component

리액트에서도 함수를 만들 수 있다.

```javascript
class Props extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/*아래와 같이 함수를 호출할 수 있다.*/}
        <Food />
      </View>
    );
  }
}

// 함수는 반드시 하나의 Html요소를 리턴해야 한다.
function Food() {
  return (
    <View>
      <Text>Food is Called</Text>
    </View>
  );
}
```

## 2. Props

Props는 함수를 호출할 때 매개변수를 지칭한다.

```java
// props : property의 약자
class Props extends Component {
  render() {
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
}

// props라고 적으면 Food를 호출 할 때의 인자들이 다 props로 들어간다.
function Food(props) {
  console.log(props);
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
  console.log('ES6 - ' + fav);
  return (
    <View>
      <Text>Food is Called</Text>
      {/* 아래와 같이 props로 받은 컴포넌트중 원하는 것을 사용할 수 있다. */}
      <Text>{fav}</Text>
    </View>
  );
}
```

## 3. map

map은 배열에서 사용된다. <br>
map을 이용하면 배열의 각 인자를 전달해서 함수에 넣고 리턴되는 값들을 다시 배열로 만들어준다.

```javascript
const friends = ['dal', 'mark', 'lynn', 'japan guy'];

friends.map(function aa(current) {
  console.log(current);
  return 0;
});

/*
 * friends의 각각의 인자 (dal, mark, lynn, japan guy)가 current로 들어간다.
 * 즉 처음에 실행되면 current의 값은 dal이 된다.
 * ** 여기서 current는 *객체 형식으로 값이 dal이 된다.
 * 그리고 current를 출력하고
 * return 0을 한다.
 *
 * 그럼 최종적으로 map은 [0, 0, 0, 0]을 반환하게 된다.
 */

// ES6에 의해
function aa(current) { ... } // 는
(current) => { ... } // 로 바뀔 수 있다.

// 즉 그래서
friends.map((current) => {console.log(current); return 0;})
// 이렇게 작성할 수 있다.
```

## 4. State

state는 컴포넌트에서 값이 바뀌는 경우가 있을 때 사용된다.<br>

또한 state를 사용하기 위해선 function 컴포넌트가 아닌, class 컴포넌트를 사용해야 한다.

```Javascript
// 컴포넌트의 데이터를 바꾸기 위해서 클래스 컴포넌트로 바꾸고, state를 선언한다.
class State extends Component {
    // State를 생성하였다.
  state = {
    count: 0,
  };
  render () {
    return ( ... )
  }
}
```

### **stat는 객체로 구성되어 있다.**

> State의 값을 출력하기 위해선 {this.state.변수명} 으로 해당 변수 값을 출력할 수 있다.

```Javascript
class State extends Component {
  state = {
    count: 0,
  };
  render () {
    return (
      <View style={styles.container}>
      {/* this.state.count로 count값을 출력할 수 있다.*/}
        <Text>{this.state.count}</Text>
      </View>
    )
  }
}
```

> State의 값을 바꾸기 위해선 this.setState를 사용해야 한다.
>
> - this.state.count = 1 >> 이런식으로 값을 수정하면 안된다.

```Javascript
class State extends Component {
  state = {
    count: 0,
  };
  render () {
    return (
      <View style={styles.container}>
        <Text>{this.state.count}</Text>
        {/* this.add() 라고 호출을 하면 즉시 실행된다. */}
        {/* 즉, 눌렀을 때 실행하는게 아니라 즉시 실행된다. */}
        {/* () : 즉시라는 뜻이다. */}
        <TouchableOpacity onPress={this.add}><Text>Add</Text></TouchableOpacity>
        </TouchableOpacity>
      </View>
    );
  }
  add = () => {
    // this.state.count = 1; // 이렇게 하면 안된다. (바로 수정하면 안된다.)
    // setState함수로 state객체에 저장할 새 객체를 괄호안에 넣어야 한다.
    this.setState ({count: 1});
  };
}
```

> Count예제
>
> Count 같은 경우는 기존의 state값을 필요로 한다.<br>
> 그래서 setState에 객체가 아닌, 함수를 만들어서 매개변수로 기존의 state를 매개변수로 준다.

```javascript
class State extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.count}</Text>
        <TouchableOpacity onPress={this.add}>
          <Text>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.minus}>
          <Text>Minus</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.reset}>
          <Text>Reset</Text>
        </TouchableOpacity>
      </View>
    );
  }
  // state는 절대 함수에서 바로 수정하지 못한다.
  add = () => {
    // this.state.count = 1; // 이렇게 하면 안된다. (바로 수정하면 안된다.)
    // setState함수로 state객체에 저장할 새 객체를 괄호안에 넣어야 한다.
    this.setState(prevState => ({count: prevState.count + 1}));
  };
  minus = () => {
    // 위 add함수와 같은 역할을 한다.
    this.setState(function aa(current) {
      return {count: current.count - 1};
    });
    // this.setState(current : this.state.current + 1);
  };
  reset = () => {
    // setState를 호출할 때 마다 react는 render함수를 다시 호출한다.
    this.setState({count: 0});
  };
}
// setState함수 안에는 state가 가져야 할 새로운 객체가 있어야 한다.
// 이를 함수를 이용해서 return 해준다.
// 그 때 그 함수의 매개변수로 이전의 state가 오게된다.
```

---

## 5. Component Life Cycle

> ### Mounting

1. constructor - JavaScript에서 class를 만들 때 호출된다.
2. render
3. componentDidMount

> ### Updating -> setState로 데이터를 업데이트 했을 때

1. render
2. componentDidUpdate

> ### Unmounting (컴포넌트 페이지가 바뀔 때)

1. componentWillUnmount

## 6. Fetch

Fetch는 서버에서 데이터를 받아오거나 데이터를 줄 때 사용된다. <br>
Fetch한 이후에는 Promise형태로 오기 때문에 json데이터로 바꿔 주어야 한다.

```Javascript
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
      .then (response => response.json ())
      // fetch한 다음 then실행 response를 받아서 json으로 변환 후 return한다.
      .then (json =>
        this.setState ({
          movies: json.data.movies,
          loading: true,
        })
      )
      // 위 then문장이 끝나면 지금 then문장 실행, json으로 변경된 값을 movies변수에 넣어준다.
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
```

async, await는 서버에서 데이터를 모두 받고 난 이후에 다음 코드로 넘어가야 하기 때문에<br>
async, await를 넣어서 데이터를 받을 때 까지 기다린다.

---

## 7. Axios

Axios는 fetch, then을 하지 않아도 데이터를 받을 수 있는 라이브러리 이다.

axios를 쓰기 위해선 먼저 다운로드 받아야 한다.

> npm i axios

기본적인 코드는

> const values = axios.get(`url`);

형식이다.

axios를 이용하면 자동으로 json형태로 데이터가 들어온다.

```Javascript
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
```
