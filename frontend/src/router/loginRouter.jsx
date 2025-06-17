import {useNavigate} from "react-router-dom";

const loginRouter = () => {
    const navigate = useNavigate();
    return () => navigate('Login')

}

export default loginRouter();