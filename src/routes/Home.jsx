import crewmates from '../assets/crewmates.webp'

function Home() {


    return (
        <div>
            <h1>Welcome to Crewmate Creator!</h1>
            <h2>Create a crewmate to get started!</h2>
            <img src={crewmates} alt="All crewmate colors" className="home-crewmates" />

        </div>
    );
};

export default Home;