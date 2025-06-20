import MainLayout from "../../components/MainLayout.jsx";
import ventButton from "@/router/ventButton.jsx";
function Login({toggleMenu}) {
    const goVent = ventButton({toggleMenu});
    return(
        <>
            <MainLayout>
                <div className="box">
                    <h1 className="heading-user">Login</h1>
                    <p className="input-heading">Email</p>
                    <input type="email" placeholder="Enter your email" className="input-details"/>
                    <p className="input-heading">Password</p>
                    <input type="password" placeholder="Enter your password" className="input-details"/>
                    <button className="button-last" onClick={goVent}>Login</button>
                </div>
            </MainLayout>

        </>
    )
}

export default Login;