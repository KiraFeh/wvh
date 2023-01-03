import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from '../../assets/images/logo.svg'

// creates a sidebar for the app

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/wvh'>
            <img src={logo} alt="Website Logo" />
        </Link>
        <nav>
            <NavLink 
                exact="true"
                activeclassname="active"
                to="/wvh"
            >
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink 
                exact="true" 
                activeclassname="active" 
                className="about-link" 
                to="/about"
            >
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink 
                exact="true"
                activeclassname="active"
                className="contact-link"
                to="/contact"
            >
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/william-von-hagen/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.github.com/KiraFeh/'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar