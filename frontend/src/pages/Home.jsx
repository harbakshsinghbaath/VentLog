import MainLayout from "../../components/MainLayout.jsx";

function Home(){
    console.log("reaching home");
    return(
        <>
            <MainLayout>
                <h1 className = "home-heading">VentLog</h1>
                <div className="content-home">
                <h2 className = "intro-para-heading">Let it out. Leave it behind.</h2>
                <p className="home-para">VentLog is your quiet corner of the internet;  a space to let go, breathe, and be honest with yourself. Write one private or anonymous vent a day, share your thoughts if you’d like, and let them disappear by the end of the day. No pressure, no judgment,  just release.</p>
                <p className="home-para">Whether you're navigating a tough moment or just need to put your feelings into words, VentLog offers a soft place to land. Every day, every mood, every you.</p>
                </div>
            </MainLayout>
        </>
    )
}

export default Home;