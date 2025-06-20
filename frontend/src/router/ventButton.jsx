import {useNavigate} from 'react-router-dom';

const ventButton = ({toggleMenu}) => {
    console.log("navigating to vent")
    const navigate = useNavigate();
    return () => {
        if(toggleMenu){
            toggleMenu();
        }
        setTimeout(() => navigate("/vent"), 1000);

    }
}

export default ventButton;