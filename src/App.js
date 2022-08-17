import { useEffect, useState } from "react";

function Hello(){
  return<h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
 const onClick = () => setShowing(prev => !prev);
 //onclick함수가 실행될 때마다 setshowing 함수를 통해 showing의 값을 true 혹은 false로 바꿈
 return (
 <div>
  {showing? <Hello/> : null}
<button onClick={onClick}>{showing ? "Hide": "Show"}</button>
 </div>
 );
}//{showing? <Hello/> : null} -> {a?b:c}는 a가 true라면 b를, a가 false라면 c를 실행하라는 의미

export default App;
