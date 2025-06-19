import {useNavigate} from "react-router-dom";

const homeButton = ({toggleMenu}) => {
    console.log("routing to home")
    const navigate = useNavigate();
    return () => {
        if(toggleMenu){
            toggleMenu();
        }
        navigate('/')
    }

}

export default homeButton;