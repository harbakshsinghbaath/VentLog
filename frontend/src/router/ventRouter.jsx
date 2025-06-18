import {useNavigate} from 'react-router-dom';

const ventRouter = () => {
    const navigate = useNavigate();
    return () => navigate('Vent');
}

export default ventRouter;