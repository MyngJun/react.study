import { useEffect, useState } from "react";

function Hello(){
  useEffect(()=>{
    console.log('Im here!');
  },[])
  return<h1>Hello</h1>;
}//  {showing? <Hello/> : null}에서 showing의 값이 true일 때마다 Hello 함수가 실행되므로 console.log('Im here!')가 showing이 true일때마다 매번 실행됨

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
//js의 button을 통해 element속 component를 create(Show)혹은 destroy(Hide)함
export default App;
