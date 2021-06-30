import logo from '../assets/logo.png';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <div>
                <img src={logo} alt="fox logo"/>
                <h1>Fox Fox Fox</h1>
            </div>
        </nav>
    )
}

export default Header;
