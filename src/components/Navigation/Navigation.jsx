import './Navigation.scss';
import navicon from '../../assets/navicon.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navigation() {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className={`navigation ${showMenu ? 'show-menu' : ''}`}>
            <img 
                src={navicon} 
                className='navigation__icon' 
                onClick={() => setShowMenu(!showMenu)} 
                /* Måste kunna klicka på hamburgermenyn i testet */
                data-testid="nav-icon" 
            />
            <a href="#" className={`navigation__link ${showMenu ? '' : 'hide'}`} onClick={() => navigate('/')}>Booking</a>
            <a href="#" className={`navigation__link ${showMenu ? '' : 'hide'}`} onClick={() => navigate('/confirmation')}>Confirmation</a>
        </nav>
    )
}
export default Navigation;