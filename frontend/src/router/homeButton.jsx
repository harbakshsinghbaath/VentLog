import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const homeButton = ({toggleMenu}) => {
    console.log("routing to home")
    const navigate = useNavigate();
    useEffect(() => {
        fetch('/api/', {
            method: 'GET',
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => setMessage(data.message))
            .catch(err => console.error('Home fetch error:', err));
    }, []);
    return () => {
        if(toggleMenu){
            toggleMenu();
        }
        setTimeout(() => navigate('/'), 1000);
    }

}

export default homeButton;