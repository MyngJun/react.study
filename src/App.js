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
  useEffect(()=>{console.log('SEARCH FOR', keyword);
}, [keyword]);//useEffect((a),[b])은 변수 'b'의 값이 변할 때마다 코드a가 다시 실행된다는 의미
  /*즉,  useEffect(()=>{console.log('SEARCH FOR', keyword);}, [keyword]);는 keyword에 입력되는 값이 달라질때마다 console.log('SEARCH FOR', keyword);만 다시 실행된다.*/
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
