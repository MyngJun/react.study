/*앞으로 해결해야할 문제: 변하는 부분만 다시 실행되면 더 효율적이기 때문에 항상 onClick이라는 event가 실행될 때 마다 function App속 모든 코드가 실행되는 것은 불필요함*/
import Button from "./Button"; 
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1); 
  const onChange = (event) => setKeyword(event.target.value);//onChange함수가 사용될 때 argument로 event를 받음
  console.log("i run all the time");
  useEffect(()=> {
    console.log("CALL THE API...");
  }, []);/*useEffect(a,[]);에서 a에 위치하게 될 코드는 그 코드가 포함된 함수가 여러번 실행되더라도 한번만 실행됨 */
 console.log('SEARCH FOR', keyword); //를 searchkeyword에 변화가 있을 때만 사용하고 싶지만 현재는 그렇지 않음
  return (
    <div>
      <input value={keyword} //setKeyword함수 속 keyword라는 변수를 value로 사용함으로써 함수와 연결해줌
      onChange={onChange} //eventlistener
      type='text'
      placeholder='Search here...'/>
      <hi>
        {counter}
      </hi>
      
      <button onClick={onClick}>
      click me
      </button> 
    </div>
  );
}

export default App;
