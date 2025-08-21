import {useNavigate} from 'react-router-dom';
import {useEffect} from "react";

const ventButton = ({toggleMenu}) => {
    console.log("navigating to vent")
    useEffect(() => {
        fetch('/api/vent', {
            method: 'GET',
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => setMessage(data.message))
            .catch(err => console.error('vent fetch error:', err));
    }, []);
    const navigate = useNavigate();
    return () => {
        if(toggleMenu){
            toggleMenu();
        }
        setTimeout(() => navigate("/vent"), 1000);

    }
}

export default ventButton;