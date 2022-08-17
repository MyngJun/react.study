import { useEffect, useState } from "react";

function App() {
  const [showing, setShowing] = useState(false);
 const onClick = () => setShowing(prev => !prev);
 return <div>
<button onClick={onClick}>{showing ? "Hide": "Show"}</button>
 </div>;//onClick함수를 사용하는 button을 누를 때마다 button의 text가 Hide 혹은 Show로 바뀜
}

export default App;
