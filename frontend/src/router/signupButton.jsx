import { useNavigate} from "react-router-dom";

const signupButton = ({toggleMenu}) => {
    const navigate = useNavigate();
    return () => {
        if(toggleMenu) toggleMenu();
        navigate('/signup');
    }

}

export default signupButton;