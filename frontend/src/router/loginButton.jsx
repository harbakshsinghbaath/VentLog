import {useNavigate} from "react-router-dom";

const loginButton = ({toggleMenu}) => {
    const navigate = useNavigate();
    return () => {
        if(toggleMenu) toggleMenu();
        navigate("/login");
    }

}

export default loginButton;