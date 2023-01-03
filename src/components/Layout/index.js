import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';


// base layout for all pages of the app
const Layout = () => {
    return (
        <div className="App">
            <Sidebar />
            <div className='page'>
                <span className='tags top-tags'></span>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout