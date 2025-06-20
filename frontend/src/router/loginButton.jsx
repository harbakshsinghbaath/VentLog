import {useNavigate} from "react-router-dom";

const loginButton = ({toggleMenu}) => {
    const navigate = useNavigate();
    return () => {
        if(toggleMenu) toggleMenu();
        setTimeout(() => navigate("/login"),1000);
    }

}

export default loginButton;