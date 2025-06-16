import {useState} from 'react';
function MainLayout(){
    const[open,setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prev) => !prev);

    };
    return(
        <>
            <div className="container">
            <div className={`foreground ${open ? "shift" :""} `}>
            </div>
            <div className={`background ${open ? "shift" :""}`}>
                <button className="menu-button" onClick={toggleMenu}>
                    {!open && <img src="../public/menu.png" alt="menu"/>}

                </button>
                {open && <div className="open-menu">
                    <button className="open-menu-button" onClick={toggleMenu}>
                        <img src={"../public/menu_open.png"} alt="menu open"/>
                    </button>
                    <button className="menu-buttons">Home</button>
                    <button className="menu-buttons">Vent</button>
                    <button className="menu-buttons">Login</button>
                    <button className="menu-buttons">Sign Up</button>
                </div> }
            </div>
            </div>
        </>

    )

}

export default MainLayout;
