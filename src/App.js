import React from 'react';


function Food({fav}){
  return <div>I love Pot {fav} </div>;
}

function App() {
  return <div>
            <h1>Hello!!</h1>
            <Food fav='kimchi'/>
            <Food fav='ramen'/>
         </div>;
}

export default App;
