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