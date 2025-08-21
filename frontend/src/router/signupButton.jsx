import { useNavigate} from "react-router-dom";
import {useEffect} from "react";

const signupButton = ({toggleMenu}) => {
    const navigate = useNavigate();
    useEffect(() => {
        fetch('/api/signup', {
            method: 'GET',
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => setMessage(data.message))
            .catch(err => console.error('Signup fetch error:', err));
    }, []);
    return () => {
        if(toggleMenu) toggleMenu();
        setTimeout(() =>navigate('/signup'),1000);
    }

}

export default signupButton;