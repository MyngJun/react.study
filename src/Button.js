import PropTypes from "prop-types";
//terminal에서 npm i prop-types입력으로 설치 후 prop-types를 import함

function Button({text}){
    return (
    <Button style={{
        backgroundColor: "tomato",
        color: "white",
    }}> //버튼에 style을 직접 넣어줌
        {text}
        </Button>
    );
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}; //Button의 text에 proptypes를 넣어줌

export default Button;//App.js에서 Button을 가져올 수 있도록 해줌