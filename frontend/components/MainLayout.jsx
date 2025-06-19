import {useState} from 'react';
import homeButton from "@/router/homeButton.jsx";
import loginButton from "@/router/loginButton.jsx";
import signupButton from "@/router/signupButton.jsx"
import ventButton from "@/router/ventButton.jsx";
function MainLayout({children}){
    const[open,setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prev) => !prev);

    };
    const goHome = homeButton({toggleMenu});
    const goVent = ventButton({toggleMenu});
    const goLogin = loginButton({toggleMenu});
    const goSignup = signupButton({toggleMenu});

    return(
        <>
            <div className="container">
            <div className={`foreground ${open ? "shift" :""} `}>
                <main className="content" >{children}</main>
            </div>
            <div className={`background ${open ? "shift" :""}`}>
                <button className="menu-button" onClick={toggleMenu}>
                    {!open && <img src="../public/menu.png" alt="menu"/>}
                </button>
                {open && <div className="open-menu">
                    <button className="open-menu-button" onClick={toggleMenu}>
                        <img src={"../public/menu_open.png"} alt="menu open"/>
                    </button>
                    <button className="menu-buttons" onClick={goHome} >Home</button>
                    <button className="menu-buttons" onClick={goVent}>Vent</button>
                    <button className="menu-buttons" onClick={goLogin}>Login</button>
                    <button className="menu-buttons" onClick={goSignup}>Sign Up</button>
                </div> }
            </div>
            </div>
        </>

    )

}

export default MainLayout;
