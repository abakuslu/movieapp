import './navbar.css';
import {BiMoviePlay} from 'react-icons/bi';
import {NavLink} from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi';
import {useEffect, useState} from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import Logo from '../../assets/logo.svg';
import {useParams} from 'react-router-dom';

function NavbarC() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let handler = () => {
      setIsOpen(false);
    };

    document.addEventListener('mousedown', handler);
  });

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='logo'>
          <img src={Logo} alt='SVG' />
        </div>
        <div className='menu-icon' onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </div>
        <div className={`nav-elements  ${isOpen && 'active'}`}>
          <ul>
            <li>
              <NavLink to='/'>Trending</NavLink>
            </li>
            <li>
              <NavLink to='/movies'>Movies</NavLink>
            </li>
            <li>
              <NavLink to='/tvseries'>Tv Series</NavLink>
            </li>
            <li>
              <NavLink to='/search'>Search</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavbarC;
