import { useNavigate} from "react-router-dom";

const signupRouter = () => {
    const navigate = useNavigate();
    return () => navigate('Signup');

}

export default signupRouter;