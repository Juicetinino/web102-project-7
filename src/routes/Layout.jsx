import { Outlet, Link } from 'react-router';
import peeking from '../assets/peeking.png';


function Layout() {
    return (
        <div className="app-container">
            <div className="app">
                <div className="sidebar">
                    <div className="sidebar-stuff">
                        <Link to="/">
                            <div className="logo-container">
                                <img src="/favicon.png" alt="App logo" className="logo" />
                                <h2>Crewmate Creator</h2>
                            </div>
                        </Link>
                        <h3><Link to="create">Create a Crewmate</Link></h3>
                        <h3><Link to="summary">Crewmate Gallery</Link></h3>
                    </div>
                    <div className="spacer"></div>
                    <img src={peeking} alt="peeker" className="peeker" />
                </div>
                <div className="content-window">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;