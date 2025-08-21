import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const loginButton = ({toggleMenu}) => {
    const navigate = useNavigate();
    useEffect(() => {
        fetch('/api/login', {
            method: 'GET',
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => setMessage(data.message))
            .catch(err => console.error('Login fetch error:', err));
    }, []);
    return () => {
        if(toggleMenu) toggleMenu();
        setTimeout(() => navigate("/login"),1000);
    }

}

export default loginButton;