import { Link } from 'react-router-dom';

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <h1>Daily Planner</h1>
            <div className="links">
                <Link to="/daily-planner/">Table</Link>
                <Link to="/daily-planner/add">Add Event</Link>
                <Link to="/daily-planner/checklist">Checklist</Link>
                
            </div>
        </nav>
     );
}
 
export default Navbar;