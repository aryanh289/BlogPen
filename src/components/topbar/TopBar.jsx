import { Link } from 'react-router-dom';
import './topbar.css'

function TopBar() {
    const currentUser = true;
    return (
        <div className="top">
            <div className='topLeft'>
                <i class="topIcon fa-brands fa-facebook-square"></i>
                <i class="topIcon fa-brands fa-twitter-square"></i>
                <i class="topIcon fa-brands fa-pinterest-square"></i>
                <i class="topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className='topCenter'>
                <ul className="topList">
                    <li className="topListItem"><Link to="/" className='link'>HOME</Link></li>
                    <li className="topListItem"><Link to="/" className='link'>ABOUT</Link></li>
                    <li className="topListItem"><Link to="/" className='link'>CONTACT</Link></li>
                    <li className="topListItem"><Link to="/write" className='link'>WRITE</Link></li>
                    <li className="topListItem">
                        {currentUser && "LOGOUT"}
                    </li>
                </ul>
            </div>

            <div className='topRight'>
                { currentUser ? 
                (<Link className="link" to="/settings">
                <img className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""/> </Link>) : 
                (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link to="/login" className='link'>LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link to="/register" className='link'>REGISTER</Link>
                        </li>      
                    </ul>          
                )}
                <i className="topSearchIcon fa-solid fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar;
