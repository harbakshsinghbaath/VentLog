import {useNavigate} from "react-router-dom";

const homeRouter = () => {
    console.log("homr router routing")
    const navigate = useNavigate();
    return () => navigate('Home')


}

export default homeRouter;