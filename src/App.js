import Button from "./Button"; 
// './'은 현재 파일을 지칭, Button.js에서 default한 Button을 가져옴

function App() {
  return (
    <div>
      <hi>
        Welcome Back!
      </hi>
      <Button text={"continue"}/>  //만들어둔 Button함수를 태그처럼 사용, text가 continue인 버튼 생성
    </div>
  );
}

export default App;
