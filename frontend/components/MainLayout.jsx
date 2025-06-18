import {useState} from 'react';
import homeRouter from "@/router/homeRouter.jsx";
import loginRouter from "@/router/loginRouter.jsx";
import signupRouter from "@/router/signupRouter.jsx"
import ventRouter from "@/router/ventRouter.jsx";
function MainLayout({children}){
    const[open,setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prev) => !prev);

    };
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
                    <button className="menu-buttons" onClick={() => {toggleMenu(); homeRouter();}} >Home</button>
                    <button className="menu-buttons" onClick={() => {toggleMenu(); ventRouter();}}>Vent</button>
                    <button className="menu-buttons" onClick={() => {toggleMenu(); loginRouter();}}>Login</button>
                    <button className="menu-buttons" onClick={() => {toggleMenu(); signupRouter();}}>Sign Up</button>
                </div> }
            </div>
            </div>


        </>

    )

}

export default MainLayout;
