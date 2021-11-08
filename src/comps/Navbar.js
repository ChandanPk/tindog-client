import { Link } from 'react-router-dom'
export default function Navbar(){
    return(
        <nav>
            <h1>Tindog</h1>
            <ul>
                <Link to="/">HOME</Link>
                <Link to="/">ABOUT</Link>
                <Link to="/add">NEW BLOG</Link>
            </ul>
        </nav>
    );
}