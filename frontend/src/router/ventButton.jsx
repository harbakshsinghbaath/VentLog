import {useNavigate} from 'react-router-dom';

const ventButton = ({toggleMenu}) => {
    console.log("navigating to vent")
    const navigate = useNavigate();
    return () => {
        if(toggleMenu){
            toggleMenu();
        }
        navigate("/vent");

    }
}

export default ventButton;