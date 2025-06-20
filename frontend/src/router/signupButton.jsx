import { useNavigate} from "react-router-dom";

const signupButton = ({toggleMenu}) => {
    const navigate = useNavigate();
    return () => {
        if(toggleMenu) toggleMenu();
        setTimeout(() =>navigate('/signup'),1000);
    }

}

export default signupButton;