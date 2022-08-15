import Button from "./Button"; 
import styles from "./App.module.css";
/*버튼의 스타일과 같은 방법으로 App.module.css에서 스타일을 결정해준 뒤 App.js에서 
파일을 import하여 className이 title인 text에 스타일을 지정해줌*/
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);/*array에 대해 (0)을 통해 초기값을 0으로 둠 즉, 처음에 counter의 값은 0이 되며 setValue는  counter를 modify하는 function의 역할을 수행함*/
  const onClick = () => setValue((prev) => prev + 1); /*prev의 값 즉, 이전 counter에 1이 더해져 return됨*/
  return (
    <div>
      <hi>
        {counter}
      </hi>
      
      <button onClick={onClick}>
      click me
      </button> 
    </div>
  );/*첫번째 onClick은 property이자 event, 두번째 onClick은 function으로 헷갈리지 말기*/
}

export default App;
