* component: HTML을 반환하는 함수
* JSX: HTML과 JAVASCRIPT의 조합
* props : 부모에서 자식에게 인자값 전달
  ~~~
  function Food(props){  //props or {fav} 가능
    return <div>I love props.fav</div>
  }
  
  function App(){
    return <div>
            <Food fav='kimchi'/>            
           </div>;
  }
  ~~~
  
* map :  배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
    ~~~
    기본사용법
      const array1 = [1, 4, 9, 16];
      
      // pass a function to map
      const map1 = array1.map(x => x * 2);
      
      console.log(map1);
      // expected output: Array [2, 8, 18, 32]
   
    index 사용법(배열과 index를 같이 넘겨줌)
    {genres.map((genre,index)=> <li className="genres_genre">{index}{genre}</li>)}
    ~~~       
    ~~~
    REACT
        {foods.map(dish=>{
          return <Food key={dish.id} name={dish.name} picture={dish.image}/>
        })}
  
        function Food({name, picture}){
          return <div>
                    <h2>I love Pot {name}</h2>
                    <img src={picture} alt={name}/>
                 </div>;
        }  
    ~~~
* prop-types : 내가 전달받은 props이 내가 원하는 props 인지 확인 하는 것 
    * npm i prop-types  (설치 후 package.json 파일을 보면 설치여부 확인가능)
    * 설치 후 error가 난다면 npm i 명령어 실행
    * 사용법
    ~~~
      import Proptypes from "prop-types";

      Food.propTypes= {
          name: Proptypes.string.isRequired,
          picture: Proptypes.string.isRequired,
          rating: Proptypes.number
      };
    ~~~

* class component
    1. function이 아니여서 return 값이 없다 대신 render method가 있다
    * state
        1. state는 Object 임
        2. setState
             1. 데이터를 변경하여 refresh 할 수 있다  
             2. 작업 후 rendering 함수 실핸
        ~~~ 
        ex)
        this.setState({this.state.count:1}) //이렇게 사용하면 외부에 의존해서 지양해야함 
        this.setState(current=>({count:current.count+1}))
        ~~~
        3. setState 함수가 호출할 때 마다 react는 새로운 state와 함께 render() 함수를 호출 한다

* Component life cycle
    1. mount: 생겨나는 것 의미
        componentDidMount : 컴포넌트 렌더링 후 
    2. updating
        componentDidUpdate : 클릭이나 이벤트 등 업데이트 후
    3. unmounting    
        componentWillUnmount: 컴포넌트가 종료 될 때

* axios
    * fetch 위에 있는 작은 Layer
    * 땅콩위에 작은 초콜릿
    
* gh-pages 
    * github에서 제공 하는 무료 웹사이트
    * 사용방법
        1. npm i gh-pages
        2. package.json 수정            
            ~~~
           맨아래에 추가
            "homepage" : http://fireyw.github.io/movie_app_2019
           scripts 에 추가
            "deploy": "gh-pages -d build"
            "predeploy": "npm run build"           
           ~~~
