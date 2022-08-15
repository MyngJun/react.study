/*앞으로 해결해야할 문제: 변하는 부분만 다시 실행되면 더 효율적이기 때문에 항상 onClick이라는 event가 실행될 때 마다 function App속 모든 코드가 실행되는 것은 불필요함*/
import Button from "./Button"; 
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1); 
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log("i run only once.");
  };
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
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
