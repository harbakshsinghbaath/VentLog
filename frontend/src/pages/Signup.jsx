import MainLayout from "../../components/MainLayout.jsx";
import loginButton from "@/router/loginButton.jsx";
function Signup({toggleMenu}) {
    const goLogin = loginButton({toggleMenu});
    return(
        <>
            <MainLayout>
                <div className="box">
                    <h1 className="heading-user">Sign Up</h1>
                    <p className="input-heading">Email</p>
                    <input type="email" placeholder="Enter your email" className="input-details"/>
                    <p className="input-heading">Password</p>
                    <input type="password" placeholder="Enter your password" className="input-details"/>
                    <button className="button-last" onClick={goLogin}>Sign Up</button>
                </div>
            </MainLayout>
        </>
    )
}

export default Signup;