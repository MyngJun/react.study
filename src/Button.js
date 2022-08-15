import PropTypes from "prop-types";
import styles from "./Button.module.css"
/* Button.module.css에서 만들어준 스타일을 App.js가 아닌 Button.js에 연결해줌*/

function Button({text}){
return <Button className={styles.btn}> 
        {text}
        </Button>;
}/*function button을 Button.module.css 파일의 class 이름 btn과 연결하여 함수속 버튼에 스타일을 넣어줌*/ 

Button.propTypes = {
    text: PropTypes.string.isRequired,
}; 

export default Button;