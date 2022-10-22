import { Link } from 'react-router-dom';

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <h1>Daily Planner</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/add">Add Event</Link>
                <Link to="/checklist">Checklist</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;