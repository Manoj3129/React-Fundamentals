import User from "./User.jsx";

function App() {
    return (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
            <User
                photoUrl="https://sm.mashable.com/mashable_in/photo/default/pra_dq64.png"
                name="Meesala Manoj"
                course="B.Tech Computer Science"
                rollNo="23VV1A0531"
                bloodGroup="AB-"
                dob="01.10.2005"
            />
           
        </div>
    );
}

export default App;
