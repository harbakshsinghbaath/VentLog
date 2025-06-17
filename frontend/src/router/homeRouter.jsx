import {useNavigate} from "react-router-dom";

const homeRouter = () => {
    const navigate = useNavigate();
    return () => navigate('Home')

}

export default homeRouter;