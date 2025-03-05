import Header from './components/headers/Header';
import Footers from './components/footers/Footers';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
   
       <>
       <Header />
       <Outlet />
       <Footers />
       </>
    )
}

export default Layout
