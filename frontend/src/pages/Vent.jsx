import MainLayout from "../../components/MainLayout.jsx";

function Vent() {
    console.log("reaching.vent")
    return (
        <>
            <MainLayout>
                <h1 className="vent-heading">VentLog</h1>
                <h2 className="vent-subheading">Vent your heart out😊</h2>
                <div className="vent-notepad">
                    <textarea className="vent-text" placeholder="Pour your heart out"></textarea>
                </div>

            </MainLayout>
        </>
    )
}

export default Vent;