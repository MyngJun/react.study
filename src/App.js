import Button from "./Button"; 
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1); 
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time"); 
  useEffect(()=> {
    console.log("CALL THE API...");
  }, []);
  useEffect(()=>{
    if(keyword !==""){
      console.log('SEARCH FOR', keyword);
    } 
    }, [keyword]);
    /*keyword는 setKeywrod라는 함수에 의해 변함
    setKeyword는 onChange라는 function에 의해 호출됨
    onChange는 사용자 input이 변할 때 호출됨*/
    //useEffect속 []에 array로 keyword, counter과 같이 여러 string들을 넣을 수 있음
    //useEffect속 []이 비었을 때는 처음 실행됐을 때에만 ()속 코드가 실행됨
    //즉, useEffect를 통해 일부 state를 변화시킬 때 component를 재실행시킨다, 즉 언제 코드를 실행시킬지 선택권을 가짐
    return (
    <div>
      <input value={keyword} 
      onChange={onChange} 
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
